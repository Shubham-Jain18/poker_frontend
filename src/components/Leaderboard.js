import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = () => {
    const [bots, setBots] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            const response = await axios.get('http://localhost:8000/leaderboard/', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setBots(response.data);
        };
        fetchLeaderboard();
    }, []);

    return (
        <div>
            <h1>Leaderboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Bot Name</th>
                        <th>Chips</th>
                        <th>Owner</th>
                    </tr>
                </thead>
                <tbody>
                    {bots.map((bot, index) => (
                        <tr key={index}>
                            <td>{bot.name}</td>
                            <td>{bot.chips}</td>
                            <td>{bot.owner}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
