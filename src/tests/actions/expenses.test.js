import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action objest', () => {
  const action = removeExpense({ id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense object', () => {
  const action = editExpense('123qwe',{updates:'updated'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123qwe',
    updates: { updates: 'updated' }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This is the note'
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0      
    }
  });
});
