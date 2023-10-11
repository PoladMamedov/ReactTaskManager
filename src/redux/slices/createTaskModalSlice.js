import { createSlice } from "@reduxjs/toolkit";

const createTaskModalSlice = createSlice({
  name: "createTaskModalOpen",
  initialState: {
    open: false,
  },
  reducers: {
    openCreateTaskModal: (state) => {
      state.open = true;
    },
    closeCreateTaskModal: (state) => {
      state.open = false;
    },
  },
});

export const { openCreateTaskModal, closeCreateTaskModal } = createTaskModalSlice.actions;

export default createTaskModalSlice.reducer;
