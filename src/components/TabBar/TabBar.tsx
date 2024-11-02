import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './tabbar.module.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const TabBar: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.todo.tasks);

  const activeTasks = tasks.filter(task => !task.completed && !task.deleted).length;
  const allTasks = tasks.filter(task => !task.deleted).length;

  return (
    <nav className={styles.tabbar}>
      <NavLink to="active" className={({ isActive }) => isActive ? `${styles.active}` : ''}>
        ТЕКУЩИЕ ДЕЛА ({activeTasks})
      </NavLink>
      <NavLink to="all" className={({ isActive }) => isActive ? `${styles.active}` : ''}>
        ВСЕ ДЕЛА ({allTasks})
      </NavLink>
      <NavLink to="completed" className={({ isActive }) => isActive ? `${styles.active}` : ''}>
        ВЫПОЛНЕННЫЕ ДЕЛА
      </NavLink>
      <NavLink to="trash" className={({ isActive }) => isActive ? `${styles.active}` : ''}>
        КОРЗИНА
      </NavLink>
    </nav>
  );
};

export default TabBar;
