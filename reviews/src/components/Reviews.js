import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaQuoteRight } from 'react-icons/fa';
import './style.css';
import reviews from './data';

function Reviews() {
    const [index, setIndex] = useState(0);
    const { name, image, job, text } = reviews[index];

    const changeCount = (count) => {
        if (count < 0) {
            return (count = reviews.length - 1);
        }
        if (count > reviews.length - 1) {
            return (count = 0);
        }
        return count;
    };

    const surpriseMe = () => {
        let randomNumber = Math.floor(Math.random() * (reviews.length - 1));
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(randomNumber);
    };

    const prevReview = () => {
        setIndex(() => {
            const newIndex = index - 1;
            return changeCount(newIndex);
        });
    };

    const nextReview = () => {
        setIndex(() => {
            const newIndex = index + 1;
            return changeCount(newIndex);
        });
    };

    return (
        <section>
            <div className='icons'>
                <FaQuoteRight className='quoteIcon' />
                <img src={image} alt={name} />
            </div>
            <h2>{name}</h2>
            <span>{job}</span>
            <p>{text}</p>
            <div className='navigate'>
                <FaArrowLeft className='Arrow' onClick={prevReview} />
                <FaArrowRight className='Arrow' onClick={nextReview} />
            </div>
            <button className='surprise' onClick={surpriseMe}>
                Surprise Me
            </button>
        </section>
    );
}

export default Reviews;
