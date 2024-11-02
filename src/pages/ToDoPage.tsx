import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import TabBar from '../components/TabBar/TabBar';
import TaskList from '../components/TaskList/TaskList';
import styles from './Styles/style.module.scss'

const ToDoPage: React.FC = () => {
  return (
    <div className={styles.ToDoPage}>
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
