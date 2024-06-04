import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ onUserCreated }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { name, email, username };

        try {
            await axios.post('http://localhost:3000/users', newUser);
            onUserCreated();
            setName('');
            setEmail('');
            setUsername('');
        } catch (error) {
            console.error('Error creating user', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="user-form">
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </label>
            <button type="submit">Create User</button>
        </form>
    );
};

export default UserForm;
