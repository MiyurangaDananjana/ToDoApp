import React, { useState, useEffect } from 'react';
import './Home.css';
import image_one from '../../assets/banner_images/banner_image_1.jpg';
import image_two from '../../assets/banner_images/banner_image_2.jpg';
import image_three from '../../assets/banner_images/banner_image_3.jpg';
import image_four from '../../assets/banner_images/banner_image_3.jpg'; // Changed the fourth image
import Header from '../header/header'
import FooterPage from '../footer/footer';

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [image_one, image_two, image_three];

    // Automatically move to the next image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds (3000 ms)

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [images.length]);

    return (
        <div>
            <Header />
            <div className="home-page">
                <div className="banner-container">
                    <div className="banner-images" style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Banner ${index + 1}`} />
                        ))}
                    </div>
                </div>
                <div className="banner-welcome">
                    <h4>Your journey starts from here</h4>
                    <h2>Welcome to home</h2>
                    <p>Welcome to a chain of distinctive hotels and resorts that are benchmarked against the best in the world. Experience the warmth of true Sri Lankan hospitality as you indulge in thoughtful amenities and exclusive extravagances at Citrus Resorts and Hotels. Discover #HappinessMoments at Citrus Resorts and Hotels in Sri Lanka and take with you memories that are bound to bring you back.</p>
                </div>

                {/* Card layout for 4 images */}
                <div className="card-container">
                    <div className="card">
                        <img src={image_one} alt="Beautiful Beach Resort" />
                        <div className="card-content">
                            <h3>Beautiful Beach Resort</h3>
                            <p>Enjoy the pristine beaches and breathtaking sunsets.</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={image_two} alt="Mountain Retreat" />
                        <div className="card-content">
                            <h3>Mountain Retreat</h3>
                            <p>Relax in the serene mountain atmosphere.</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={image_three} alt="Urban Luxury Hotel" />
                        <div className="card-content">
                            <h3>Urban Luxury Hotel</h3>
                            <p>Experience the elegance of our city hotels.</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={image_four} alt="Forest Hideaway" />
                        <div className="card-content">
                            <h3>Forest Hideaway</h3>
                            <p>Unwind in the heart of nature.</p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterPage />
        </div>
    );
};

export default HomePage;
