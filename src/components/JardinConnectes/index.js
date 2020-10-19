import React from 'react';
import Header from 'src/components/Header';
import Navigation from 'src/components/Navigation';
import HomeVideo from 'src/components/HomeVideo';

import './style.scss';

const JardinConnectes = () => {
  console.log('App launched');
  return (
    <div className="jardinconnectes">
      <Header />
      <Navigation />
      <HomeVideo />
    </div>
  );
};

export default JardinConnectes;
