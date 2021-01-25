import './App.css';
import data from './components/data';
import React, { useState } from 'react';
import List from './components/List';

function App() {
    const [people, setPeople] = useState(data);
    return (
        <div className='App'>
            <h1>{people.length} Birthday Today</h1>
            <List people={people} />
            <button onClick={() => setPeople([])}>Clear reminder</button>
        </div>
    );
}
export default App;
