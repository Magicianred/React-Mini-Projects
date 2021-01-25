import React from 'react';
import Tour from './Tour';

function Tours({ tours, removeTour }) {
    return (
        <div className='tours'>
            {tours.map((tour) => {
                return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
            })}
        </div>
    );
}

export default Tours;
