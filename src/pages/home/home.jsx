import React, { useState, useEffect } from 'react';
import './Home.css';
import image_one from '../../assets/banner_images/banner_image_1.jpg';
import image_two from '../../assets/banner_images/banner_image_2.jpg';
import image_three from '../../assets/banner_images/banner_image_3.jpg';

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [image_one, image_two, image_three];

    // Automatically move to the next image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000); // Change image every 3 seconds (3000 ms)

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [images.length]);

    return (
        <div className="home-page">
            <div className="banner-container">
                <div className="banner-images" style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Banner ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
