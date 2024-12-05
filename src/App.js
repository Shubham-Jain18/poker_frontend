import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotUpload from './components/BotUpload';
import Leaderboard from './components/Leaderboard';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <div>
                <h1>Poker Bot Tournament</h1>
                <nav>
                    <ul>
                        <li><a href="/signup">Signup</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/upload">Upload Bot</a></li>
                        <li><a href="/leaderboard">Leaderboard</a></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/upload" element={<BotUpload />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/" element={<h2>Welcome to the Poker Bot Tournament!</h2>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
