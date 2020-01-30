import BackButton from 'components/BackButton';
import { convertData, useDBDispatch, useDBState } from 'context/DBContext';
import { format } from 'date-fns';
import { startOfDay } from 'date-fns/esm';
import localforage from 'localforage';
import React, { Fragment, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { TransactionsContainer, TransactionsTable } from './styled';

export const Transactions = () => {
  const { id } = useParams();
  const { categories } = useDBState();
  const dispatch = useDBDispatch();

  const category = categories[id] || { transactions: [] };

  const transactionsPerDay = useMemo(() => {
    const transactionsMap = {};

    for (const transaction of category.transactions) {
      const day = startOfDay(new Date(transaction.date));
      if (transactionsMap[day] === undefined) {
        transactionsMap[day] = [];
      }
      transactionsMap[day].push(transaction);
    }

    return Object.keys(transactionsMap)
      .sort((a, b) => b - a)
      .map(date => {
        let totalAmount = 0;

        for (const transaction of transactionsMap[date]) {
          totalAmount += transaction.amount;
        }

        return {
          date,
          transactions: transactionsMap[date].sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          ),
          totalAmount,
        };
      });
  }, [category.transactions]);

  const handleDeleteTransaction = useCallback(
    transactionId => {
      if (window.confirm('Delete this transaction?')) {
        localforage
          .setItem('categories', {
            ...categories,
            [id]: {
              ...category,
              transactions: category.transactions.filter(
                transaction => transactionId !== transaction.id
              ),
            },
          })
          .then(_categories => {
            convertData(_categories, dispatch);
          });
      }
    },
    [categories, category, dispatch, id]
  );

  return (
    <TransactionsContainer>
      <BackButton />
      <h6>Category - {category.name}</h6>
      <TransactionsTable>
        <tbody>
          {transactionsPerDay.map(data => (
            <Fragment key={data.date}>
              <tr
                style={{
                  paddingTop: '1rem',
                  borderBottom: '1px solid #e0e0e0',
                }}
              >
                <td colSpan={2} style={{ fontWeight: 'bold' }}>
                  {format(new Date(data.date), 'MMM d')}
                </td>
                <td style={{ textAlign: 'right', fontWeight: 'bold' }}>
                  {data.totalAmount}
                </td>
              </tr>
              {data.transactions.map((transaction, index) => (
                <tr
                  key={transaction.id}
                  onClick={() => handleDeleteTransaction(transaction.id)}
                >
                  <td>{format(transaction.date, 'HH:mm')}</td>
                  <td>{transaction.description || '—'}</td>
                  <td style={{ textAlign: 'right' }}>{transaction.amount}</td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  );
};
