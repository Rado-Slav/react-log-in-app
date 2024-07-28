import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound: React.FC = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>Oops! The page you're looking for does not exist.</p>
      <Link to="/" className="back-home-link">Go to Home Page</Link>
    </div>
  );
};

export default PageNotFound;