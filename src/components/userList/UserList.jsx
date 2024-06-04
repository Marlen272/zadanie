import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = ({ onUserDeleted }) => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
            const response = await axios.get('http://localhost:3000/users');
            setUsers(response.data);

    };

    const deleteUser = async (id) => {
            await axios.delete(`http://localhost:3000/users/${id}`);
            onUserDeleted();
            fetchUsers();

    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (users.length === 0) {
        return <p>Список пуст</p>;
    }

    return (
        <table className="user-table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default UserList;
