import { DBContextProvider } from 'context/DBContext';
import Budget from 'pages/Budget';
import Category from 'pages/Category';
import NewCategory from 'pages/Category/NewCategory';
import Dashboard from 'pages/Dashboard';
import NewBudget from 'pages/NewBudget';
import { NewTransaction } from 'pages/NewTransaction';
import { Transactions } from 'pages/Transactions';
import { TransactionsDay } from 'pages/TransactionsDay';
import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import GlobalStyle from 'styled/GlobalStyle';

const AppRouter = () => {
  return (
    <DBContextProvider>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/category" component={NewCategory} />
          <Route exact path="/category/:id" component={Category} />
          <Route
            exact
            path="/category/:categoryId/budget/"
            component={NewBudget}
          />
          <Route
            exact
            path="/category/:categoryId/budget/:budgetId"
            component={Budget}
          />
          <Route
            exact
            path="/category/:id/transaction"
            component={NewTransaction}
          />
          <Route
            exact
            path="/category/:id/transactions"
            component={Transactions}
          />
          <Route exact path="/transactions" component={TransactionsDay} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </DBContextProvider>
  );
};

export default AppRouter;
