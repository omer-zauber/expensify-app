import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpeneseListFilters'


const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters /> 
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;