import React from 'react';
import './list.css'

const List = ({ people }) => {
    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <div className="person" key={id}>
                        <img src={image} alt={name} />
                        <section>
                            <h3>{name}</h3>
                            <p>{age} years</p>
                        </section>
                    </div>
                );
            })}
        </>
    );
};

export default List;
