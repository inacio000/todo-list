import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import TaskItem from '../TaskItem/TaskItem';
import styles from './tasklist.module.scss'

interface TaskListProps {
  filter: 'all' | 'active' | 'completed' | 'trash';
}

const TaskList: React.FC<TaskListProps> = ({ filter }) => {
  const tasks = useSelector((state: RootState) => state.todo.tasks);

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case 'active':
        return !task.completed && !task.deleted;
      case 'completed':
        return task.completed && !task.deleted;
      case 'trash':
        return task.deleted;
      case 'all':
      default:
        return !task.deleted;
    }
  });

  return (
    <div className={styles.tabList}>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p>Задачи не найдены.</p>
      )}
    </div>
  );
};

export default TaskList;
