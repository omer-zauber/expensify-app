import React from 'react';
import ReactDOM from 'react-dom';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      This is the edit component. Editing expense id {props.match.params.id}.
    </div>   
  );
}

export default EditExpensePage;