import React, { useState, useEffect } from 'react';
import './about.css'
import { useNavigate } from 'react-router-dom';
import Header from '../header/header'
import image_one from '../../assets/banner_images/about-container.jpg';
import FooterPage from '../footer/footer';
import CardComponent from '../../components/CardComponents/card'

const AboutPage = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const containerStyle = {
    marginTop: '100px'
  };

  const pSpace = {
    marginBottom: '30px'
  };

  return (
    <div>
      <Header />
      <div className='about-page'>
        <div className=".about-banner-container">
          <div className="about-banner-images" >
            <img src={image_one} alt="image_one" />
          </div>
          <div className='text-section'>
            <h2>About Us</h2>
            <p  style={{ lineHeight: '1.6', marginBottom: '20px' }}>Nestled in the heart of the scenic hill city of Kandy, [Hotel Name] offers a blend of modern luxury and traditional Sri Lankan hospitality. Our hotel is more than just a place to stay; it is a tranquil retreat set against the lush backdrop of misty mountains, ancient temples, and the iconic Kandy Lake.

              At [Hotel Name], we pride ourselves on providing our guests with a serene and comfortable experience. Whether you're here to explore the cultural treasures of Kandy or unwind amidst nature, our carefully designed rooms, impeccable service, and warm ambiance ensure a memorable stay.

              We offer a variety of rooms and suites tailored to meet the needs of families, couples, and solo travelers alike. Our in-house restaurant serves a delightful mix of authentic Sri Lankan dishes and international cuisine, made with locally sourced ingredients to offer the freshest flavors.

              With easy access to Kandy's UNESCO World Heritage sites, including the Temple of the Sacred Tooth Relic, the Royal Botanical Gardens, and the vibrant city markets, [Hotel Name] serves as the perfect base for discovering the rich history and natural beauty of Sri Lanka.

              Whether you’re visiting for business or leisure, we welcome you to experience the warmth, comfort, and elegance of [Hotel Name], where every guest is treated like family.</p>
          </div>
        </div>
        <div style={containerStyle}>
          <CardComponent />
        </div>
      </div>
      <FooterPage />
    </div>


  );
};

export default AboutPage;
