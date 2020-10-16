import React from 'react';
import Header from 'src/components/Header';
import Navigation from 'src/components/Navigation';

import './style.scss';

const JardinConnectes = () => {
  console.log('App launched');
  return (
    <div className="jardinconnectes">
      <Header />
      <Navigation />
    </div>
  );
};

export default JardinConnectes;
