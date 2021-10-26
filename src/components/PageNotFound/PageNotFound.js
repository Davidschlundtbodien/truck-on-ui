import React from 'react';
import { Link } from 'react-router-dom';
import stuckTruck from '../../images/Stuck_Truck.jpeg';
import './PageNotFound.scss';

const PageNotFound = () => {
  return (
    <section className="error-container">
      <img className="dead-end" src={stuckTruck} alt="Dead End"></img>
      <div className="error-text">
        <h1 className="error-title">
          404 Error - Trail not found. Please try again later.
        </h1>
        <Link className="error-explore-link" to="/">Back to Explore</Link>
      </div>
    </section>
  );
}

export default PageNotFound;
