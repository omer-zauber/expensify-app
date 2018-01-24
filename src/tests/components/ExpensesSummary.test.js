import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('should render correct message for one expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={325} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render correct message for multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={353232525} />);
  expect(wrapper).toMatchSnapshot();
});