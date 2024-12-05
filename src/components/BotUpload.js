import React, { useState } from 'react';
import axios from 'axios';

const BotUpload = () => {
    const [botName, setBotName] = useState('');
    const [botFile, setBotFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleUpload = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            setMessage('You must be logged in to upload a bot.');
            return;
        }

        const formData = new FormData();
        formData.append('name', botName);
        formData.append('file', botFile);

        try {
            const response = await axios.post('http://localhost:8000/upload/', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.detail || 'Upload failed');
        }
    };

    return (
        <div>
            <h2>Upload Bot</h2>
            <form onSubmit={handleUpload}>
                <input
                    type="text"
                    placeholder="Bot Name"
                    value={botName}
                    onChange={(e) => setBotName(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setBotFile(e.target.files[0])}
                    required
                />
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default BotUpload;
