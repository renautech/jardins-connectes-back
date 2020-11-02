import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Navigation from 'src/containers/Navigation';

import './style.scss';

const Page = ({ children }) => (
  <div className="page">
    <div className="page__up">
      <Header />
      <Navigation />
      {children}
    </div>
    <div className="page__down">
      <Footer />
    </div>
  </div>
);

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};

export default Page;
