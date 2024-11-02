// src/components/TaskItem.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './taskitem.module.scss'
import { MdDone } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { completeTask, deleteTask } from '../../features/todoSlice';

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  deleted: boolean;
}

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className={`${styles.taskItem} ${task.completed ? `${styles.completed}` : ''}`}>
      {/* <p>{task.title}</p> */}
      {task.description && <p>{task.description}</p>}

      <div className={styles.taskActions}>
        {!task.completed && (
          <span onClick={handleComplete}>{task.completed ? <IoMdDoneAll /> : <MdDone />}</span>
        )}
        <span onClick={handleDelete}><FaTrash /></span>
      </div>
    </div>
  );
};

export default TaskItem;
