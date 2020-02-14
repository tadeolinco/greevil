import BackButton from 'components/BackButton';
import Button from 'components/Button';
import Input from 'components/Input';
import { Row } from 'components/Layout';
import { convertData, useDBDispatch, useDBState } from 'context/DBContext';
import { addDays, format, isSameDay } from 'date-fns';
import { startOfDay } from 'date-fns/esm';
import localforage from 'localforage';
import React, { useCallback, useMemo, useState } from 'react';
import { TransactionsContainer, TransactionsTable } from './styled';

export const TransactionsDay = () => {
  const { categories } = useDBState();
  const dispatch = useDBDispatch();

  const [date, setDate] = useState(String(startOfDay(new Date())));

  const transactionsInDate = useMemo(() => {
    const transactions = [];
    Object.values(categories).forEach(category => {
      category.transactions.forEach(transaction => {
        if (isSameDay(startOfDay(transaction.date), new Date(date))) {
          transactions.push({
            ...transaction,
            categoryName: category.name,
            categoryId: category.id,
          });
        }
      });
    });

    return transactions.sort((a, b) => b.date - a.date);
  }, [categories, date]);

  const handleDeleteTransaction = useCallback(
    transaction => {
      if (window.confirm('Delete this transaction?')) {
        const category = categories[transaction.categoryId];

        localforage
          .setItem('categories', {
            ...categories,
            [category.id]: {
              ...category,
              transactions: category.transactions.filter(
                _transaction => _transaction.id !== transaction.id
              ),
            },
          })
          .then(_categories => {
            convertData(_categories, dispatch);
          });
      }
    },
    [categories, dispatch]
  );

  return (
    <TransactionsContainer>
      <BackButton />
      <Input
        label="Date"
        type="date"
        value={format(new Date(date), 'yyyy-MM-dd')}
        onChange={event => {
          setDate(event.target.value);
        }}
      />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <TransactionsTable>
          <tbody>
            {transactionsInDate.map((transaction, index) => (
              <tr
                key={transaction.id}
                onClick={() => handleDeleteTransaction(transaction)}
                style={{
                  backgroundColor: index % 2 === 0 ? 'white' : '#e0e0e0',
                }}
              >
                <td>{transaction.categoryName}</td>
                <td>{transaction.description || '—'}</td>
                <td style={{ textAlign: 'right' }}>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </div>
      <Row style={{ marginTop: '1rem' }}>
        <Button
          style={{ flex: 1, marginRight: '1rem' }}
          onClick={() => {
            setDate(String(addDays(new Date(date), 1)));
          }}
        >
          Next
        </Button>
        <Button
          style={{ flex: 1 }}
          onClick={() => {
            setDate(String(addDays(new Date(date), -1)));
          }}
        >
          Previous
        </Button>
      </Row>
    </TransactionsContainer>
  );
};
