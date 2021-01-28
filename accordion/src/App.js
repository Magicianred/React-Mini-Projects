import React, { useState } from 'react';
import './App.css';
import data from './components/data';
import Questions from './components/Questions';
import './components/style.css';

function App() {
    const [questions, setQuestions] = useState(data);
    return (
        <main className='App'>
            <div className='container'>
                <h2>Questions And Answers About Login</h2>
                <section className='info'>
                    {questions.map((question) => {
                        return <Questions key={question.id} {...question} />;
                    })}
                </section>
            </div>
        </main>
    );
}

export default App;
