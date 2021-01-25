import React, { useState } from 'react';

function Tour({ id, name, image, info, price, removeTour }) {
    const [readMore, setReadMore] = useState(false);
    return (
        <section>
            <div className='tourImg'>
                <img src={image} alt='' />
            </div>

            <footer>
                <div className='info'>
                    <h4>{name}</h4>
                    <h4>${price}</h4>
                </div>
                <p>
                    {readMore ? `${info}` : `${info.substring(0, 230)}`}
                    <span onClick={() => setReadMore(!readMore)}>
                        {readMore ? '  Show Less' : '  Read More'}
                    </span>
                </p>
                <button onClick={() => removeTour(id)}>Not Interested</button>
            </footer>
        </section>
    );
}

export default Tour;
