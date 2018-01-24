import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';

test('should render correct message for 0 expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render correct message for one expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[2]]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render correct message for multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});