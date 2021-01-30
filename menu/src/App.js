import React, { useState } from 'react';
import './App.css';
import Categories from './components/Categories';
import Menu from './components/Menu';
import menu from './components/data';
import './components/style.css';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

function App() {
    const [menuItems, setMenuItems] = useState(menu);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(menu);
            return;
        }
        const newItems = menu.filter((item) => item.category === category);
        setMenuItems(newItems);
    };
    return (
        <div className='App'>
            <div className='title'>
                <h1>Our Menu</h1>
            </div>
            <Categories categories={categories} filterItems={filterItems} />
            <Menu menuItems={menuItems} />
        </div>
    );
}

export default App;
