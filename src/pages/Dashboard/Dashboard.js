import Button from 'components/Button';
import CategoryGrid from 'components/CategoryGrid';
import Input from 'components/Input';
import { Row } from 'components/Layout';
import { useDBState } from 'context/DBContext';
import localforage from 'localforage';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CenterText } from 'styled/GlobalStyle';
import { DashboardContainer, GridContainer } from './styled';

const Dashboard = () => {
  const history = useHistory();
  const { categories, meta } = useDBState();
  const [income, setIncome] = useState('0');

  const monthlyExpenses = useMemo(() => {
    let expenses = 0;
    Object.values(meta).forEach(({ budget }) => {
      expenses += budget;
    });
    return expenses;
  }, [meta]);

  useEffect(() => {
    localforage.setItem('income', +income);
  }, [income]);

  useEffect(() => {
    localforage
      .getItem('income')
      .then(_income => setIncome(String(_income || '0')));
  }, []);

  return (
    <DashboardContainer>
      <GridContainer>
        {Object.keys(categories).length ? (
          <CategoryGrid />
        ) : (
          <CenterText>No categories</CenterText>
        )}
      </GridContainer>
      <div style={{ backgroundColor: 'white' }}>
        <Row style={{ padding: '0.5rem', paddingBottom: 0 }}>
          <Input
            row
            type="number"
            label="Income"
            value={income}
            onChange={event => {
              setIncome(event.target.value);
            }}
          />
        </Row>
        <Row style={{ padding: '0.5rem', paddingBottom: 0 }}>
          <div style={{ flex: 1 }}>Monthly expenses:</div>
          <div style={{ flex: 1, textAlign: 'right' }}>{monthlyExpenses}</div>
        </Row>
        <Row style={{ padding: '0.5rem', paddingBottom: 0 }}>
          <div style={{ flex: 1 }}>Monthly savings:</div>
          <div style={{ flex: 1, textAlign: 'right' }}>
            {income - monthlyExpenses}
          </div>
        </Row>
        <Row style={{ padding: '0.5rem' }}>Version: 0.0.4</Row>
      </div>
      <Row>
        <Button onClick={() => history.push('/category')} style={{ flex: 1 }}>
          Add Category
        </Button>
        <Button
          onClick={() => history.push('/transactions')}
          style={{ flex: 1, backgroundColor: '#66BB6A' }}
        >
          Transactions
        </Button>
      </Row>
    </DashboardContainer>
  );
};

export default Dashboard;
