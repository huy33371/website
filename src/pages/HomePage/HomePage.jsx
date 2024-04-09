import React from 'react';
import HomeSlider from './HomeSlider/HomeSlider'; // Import HomeSlider component
import SpecialProduct from '../../component/SpecialProduct/SpecialProduct';

const HomePage = () => {

  return (
    <div className='container'>
      <HomeSlider />
      <div className="container my-5">
          <SpecialProduct />
      </div>
    </div>
  );
};

export default HomePage;
