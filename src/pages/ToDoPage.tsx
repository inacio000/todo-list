import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import TabBar from '../components/TabBar/TabBar';
import TaskList from '../components/TaskList/TaskList';
import styles from './Styles/style.module.scss'
import { useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';

const ToDoPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className={styles.ToDoPage}>
      <div className={styles.headerContainer}>
        <button
          onClick={handleLogout}
          className={styles.logoutButton}
        >
          Выйти
        </button>
      </div>
      <Header />
      <TabBar />
      <Routes>
        <Route path="/" element={<Navigate to="all" />} />
        <Route path="all" element={<TaskList filter="all" />} />
        <Route path="active" element={<TaskList filter="active" />} />
        <Route path="completed" element={<TaskList filter="completed" />} />
        <Route path="trash" element={<TaskList filter="trash" />} />
      </Routes>
    </div>
  );
};

export default ToDoPage;
