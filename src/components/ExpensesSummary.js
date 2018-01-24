import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export class ExpensesSummary extends React.Component {
  state = {

    total: selectExpensesTotal(this.props.expenses)
  };

  render() {
    return (
      <div>
        {
          this.props.expenses.length > 0 &&
          <p>
            Viewing {this.props.expenses.length} expense{this.props.expenses.length > 1 ? 's' : ''} totalling {numeral(selectExpensesTotal(this.props.expenses) / 100).format('$0,0.00')}
          </p>
        }
      </div>
    );
  };
}


const mapStateToProps = (state) => ({expenses: selectExpenses(state.expenses, state.filters)});

export default connect(mapStateToProps)(ExpensesSummary);