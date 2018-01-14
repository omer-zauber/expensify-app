import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    This is the 404 component.
    <Link to ="/">Go Home.</Link>
  </div>
);

export default NotFoundPage;