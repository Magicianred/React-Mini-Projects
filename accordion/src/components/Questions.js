import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Questions({ id, title, info }) {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article>
            <header>
                <h5>{title}</h5>
                <button className='btn' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    );
}

export default Questions;
