import React from 'react';
import './card.css'; // Ensure this path is correct
import card_image_one from '../../assets/card-imgs/card-img-1.jpg';
import card_image_two from '../../assets/card-imgs/card-img-2.jpg';
import card_image_three from '../../assets/card-imgs/card-img-3.jpg';
import card_image_four from '../../assets/card-imgs/card-img-4.jpg';

const CardComponent = () => {
    const cardTitles = [
        'Beautiful Beach Resort',
        'Forest Hideaway',
        'Mountain Retreat',
        'Urban Luxury Hotel'
    ];

    const cardDescriptions = [
        'Enjoy the pristine beaches and breathtaking sunsets.',
        'Unwind in the heart of nature.',
        'Relax in the serene mountain atmosphere.',
        'Experience the elegance of our city hotels.'
    ];

    return (
        <div className="cards-grid">
            {[card_image_one, card_image_four, card_image_two, card_image_three].map((image, index) => (
                <div className="card-item" key={index}>
                    <img
                        src={image}
                        alt={`Card ${index + 1}`}
                    />
                    <div className="card-details">
                        <h3>{cardTitles[index]}</h3>
                        <p>{cardDescriptions[index]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardComponent;
