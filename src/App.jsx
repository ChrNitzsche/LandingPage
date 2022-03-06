import React from 'react';
import './ressources/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './components/header-footer/Header';
import Footer from './components/header-footer/Footer';
import Featured from './components/featured';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Featured />

      <div style={{ backgroundColor: '#99ccff', height:'800px'}}></div>
      <div style={{ backgroundColor: '#99ffcc', height:'800px'}}></div>
      <div style={{ backgroundColor: '#ffcc99', height:'800px'}}></div>
      <div style={{ backgroundColor: '#cc99ff', height:'800px'}}></div>
    
      <Footer />
    </div>
  );
}

export default App;