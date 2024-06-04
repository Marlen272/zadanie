import React, { useState } from 'react';
import './App.css';
import Modal from "./components/modal/Modal";
import UserList from "./components/userList/UserList";
import UserForm from "./components/userForm/UserForm";

const App = () => {
    const [refresh, setRefresh] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleUserCreated = () => {
        setRefresh(!refresh);
        setModalMessage('Пользователь успешно создан');
        setIsModalVisible(true);
    };

    const handleUserDeleted = () => {
        setRefresh(!refresh);
        setModalMessage('Пользователь удален');
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="App">
            <h1>User Management</h1>
            <UserForm onUserCreated={handleUserCreated} />
            <UserList onUserDeleted={handleUserDeleted} />
            {isModalVisible && <Modal message={modalMessage} onClose={closeModal} />}
        </div>
    );
};

export default App;
