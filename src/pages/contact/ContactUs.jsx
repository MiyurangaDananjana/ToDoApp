import React, { useState, useEffect } from 'react';
import './ContactUs.css';
import Header from '../header/header';
import FooterPage from '../footer/footer';
import Img from '../../assets/banner_images/contact-3.jpg'
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (send data to the backend or API)
        console.log('Form data:', formData);
        setSubmitted(true);
    };

    return (
        <div>
            <Header />
            <div className='contact-page'>
                <div className="contact-banner-container">
                    <div className="about-banner-images" >
                        <img src={Img} alt="image_one" />
                    </div>
                </div>
                <div className='contact-container'>
                    <h2>Contact Us</h2>
                    {submitted ? (
                        <div className="thank-you-message">
                            <h3>Thank you for contacting us!</h3>
                            <p>We will get back to you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className='contact-form'>
                            <div className='form-group'>
                                <label htmlFor='name'>Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='message'>Message</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type='submit' className='submit-button'>Submit</button>
                        </form>
                    )}
                </div>

            </div>
            <FooterPage />
        </div>
    );
};

export default ContactUs;
