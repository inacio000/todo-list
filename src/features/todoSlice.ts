import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  deleted: boolean;
}

interface TodoState {
  tasks: Task[];
}

const initialState: TodoState = {
  tasks: [
    {
      id: "1",
      title: "Дело 1",
      description: "Пример описание дела",
      completed: false,
      deleted: false,
    },
    // { id: '2', title: 'Tarefa 2', completed: false, deleted: false },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    completeTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.completed = true;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.deleted = true;
    },
  },
});

export const { addTask, completeTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
