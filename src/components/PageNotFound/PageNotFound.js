import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.scss';

const PageNotFound = () => {
  return (
    <section>
      <h1>
        404 Please Truck On back to the <Link to="/">home page..</Link>
      </h1>
    </section>
  );
}

export default PageNotFound;
