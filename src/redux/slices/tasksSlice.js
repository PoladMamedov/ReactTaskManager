import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ ...action.payload, id: Date.now() });
    },
    toggleTaskReadiness: (state, action) => {
      const taskIndex = state.findIndex((task) => task.id === action.payload);
      state[taskIndex].finished = !state[taskIndex].finished;
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const taskIndex = state.findIndex((task) => task.id === action.payload.id);
      state[taskIndex] = action.payload;
    },
  },
});

export const { addTask, toggleTaskReadiness, deleteTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
