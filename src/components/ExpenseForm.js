import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: ''
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(()=> ({ description }));
  };

  render() {
    return (
      <div>
        <form action="">
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="number"
            placeholder="Amount"
          />
          <textarea name="" id="" cols="30" rows="10" placeholder="Add a note for your expense (optional)"></textarea>
          <button type="submit">Add Expense</button>
        </form>
      </div>
    )
  };
};