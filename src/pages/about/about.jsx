import React, { useState, useEffect } from 'react';
import './about.css'
import { useNavigate } from 'react-router-dom';
import Header from '../header/header'
import image_one from '../../assets/banner_images/banner_image_1.jpg';

const AboutPage = () => {

  return (
    <div>
      <Header />
      <div className='about-page'>
        <div className=".about-banner-container">
          <div className="about-banner-images" >
            <img src={image_one} alt="image_one" />
          </div>
        </div>
        </div>
    </div>


  );
};

export default AboutPage;
