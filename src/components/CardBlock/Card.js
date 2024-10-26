import React from 'react';
import './Card.css';

function Card(props) {

    const cardImage = props.image;
    const cardHeading = props.heading;
    const cardParagraph = props.paragraph;

    return (
        <div className="card-container">
            <div className="card-image">
                <img src={cardImage} alt="Card img"/>
            </div>
            <h3 className="card-heading">{cardHeading}</h3>
            <p className="card-paragraph">{cardParagraph}</p>
        </div>
    );
}

export default Card;