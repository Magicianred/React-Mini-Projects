import React from 'react';

function Menu({ menuItems }) {
    return (
        <section className='menuList'>
            {menuItems.map((menuItem) => {
                const { id, title, category, price, img, desc } = menuItem;
                return (
                    <article key={id}>
                        <div className='menuImg'>
                            <img src={img} alt={title} />
                        </div>
                        <div className='info'>
                            <header>
                                <h4>{title.toUpperCase()}</h4>
                                <h4 className='price'>${price}</h4>
                            </header>
                            <p>{desc}</p>
                        </div>
                    </article>
                );
            })}
        </section>
    );
}

export default Menu;
