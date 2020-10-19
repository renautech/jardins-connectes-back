import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Navigation from 'src/components/Navigation';

import './style.scss';

const JardinConnectes = () => {
  console.log('App launched');
  return (
    <div className="jardinconnectes">
      <Header />
      <Navigation />
      <Footer />
    </div>
  );
};

export default JardinConnectes;
