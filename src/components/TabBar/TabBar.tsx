import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './tabbar.module.scss'

const TabBar: React.FC = () => {
  return (
    <nav className={styles.tabbar}>
      <NavLink to="active" className={({ isActive }) => isActive ? `${styles.active}` : ''}>
        ТЕКУЩИЕ ДЕЛА
      </NavLink>
      <NavLink to="all" className={({ isActive }) => isActive ? `${styles.active}` : ''}>
        ВСЕ ДЕЛА
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
