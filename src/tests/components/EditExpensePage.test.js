import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage 
    editExpense={editExpense}
    removeExpense={removeExpense}
    history={history}
    expense= {expenses[2]}
  />);
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense',()=> {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
  expect(removeExpense).toHaveBeenCalledTimes(0);
});

test('should handle removeExpense', () => {
  wrapper.find('button').prop('onClick')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id:expenses[2].id });
  expect(editExpense).toHaveBeenCalledTimes(0);
});


// should render EditExpensePage (snapshot)
// should handle editExpense ( spies )
// should handle removeExpense (spies)
// beforeEach