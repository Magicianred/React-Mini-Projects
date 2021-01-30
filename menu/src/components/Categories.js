import React from 'react';

function Categories({ categories, filterItems }) {
    return (
        <div className='btn-container'>
            {categories.map((category, index) => {
                return (
                    <button key={index} onClick={() => filterItems(category)}>
                        {category.toUpperCase()}
                    </button>
                );
            })}
        </div>
    );
}

export default Categories;
