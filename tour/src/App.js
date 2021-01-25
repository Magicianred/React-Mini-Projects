import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading';
import axios from 'axios';
import Tours from './components/Tours';
import './components/style.css';

const url = 'https://course-api.com/react-tours-project';

function App() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id != id);
        setTours(newTours);
    };

    const fetchTours = () => {
        axios
            .get(url)
            .then((res) => {
                setTours(res.data);
                setTours(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(true);
            });
    };

    useEffect(() => {
        fetchTours();
    }, []);

    if (loading) {
        return (
            <div className='App'>
                <Loading />
            </div>
        );
    }
    if (tours.length === 0) {
        return (
            <div className='App'>
                <h2>No tours left</h2>
                <button className='refreshButton' onClick={fetchTours}>Refresh</button>
            </div>
        );
    }
    return (
        <div className='App'>
            <h2>Our Tours</h2>
            <Tours tours={tours} removeTour={removeTour} />
        </div>
    );
}

export default App;
