import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, Task } from '../../features/todoSlice';
import { MdClearAll } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import styles from './header.module.scss'

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState<string>('');

  const handleAddTask = () => {
    if (taskText.trim() === '') return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: taskText,
      description: taskText,
      completed: false,
      deleted: false,
    };

    dispatch(addTask(newTask));
    setTaskText('');
  };

  const handleClear = () => {
    setTaskText('');
  };

  return (
    <header className={styles.header}>
      <button
        onClick={handleAddTask}
        className={styles.add}
      >
        <FaPlus /> ДОБАВИТЬ
      </button>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Пополните список..."
      />
      <div className={styles.twoButton}>
        <button
          onClick={handleAddTask}
          className={styles.second}
        >
          <FaPlus /> ДОБАВИТЬ
        </button>
        <button
          onClick={handleClear}
          className={styles.clear}
        >
          ОЧИСТИТЬ <MdClearAll />
        </button>
      </div>
    </header>
  );
};

export default Header;
