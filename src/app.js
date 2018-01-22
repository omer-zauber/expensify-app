import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() =>{
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpense({
  description: 'Water Bill',
  amount: 200,
  createdAt: Date.now() - 86400000
}));

store.dispatch(addExpense({
  description: 'Gas Bill',
  amount: 250,
  createdAt: Date.now()+30000
}));

store.dispatch(addExpense({
  description: 'rent',
  amount: 2000,
  createdAt: 0
}));

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
  
)
ReactDOM.render(jsx, document.getElementById('app'));
