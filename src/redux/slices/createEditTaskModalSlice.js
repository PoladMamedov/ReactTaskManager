import { createSlice } from "@reduxjs/toolkit";

const createEditTaskModalSlice = createSlice({
  name: "createTaskModalOpen",
  initialState: {
    open: false,
    isEditing: false,
    editedTaskId: "",
  },
  reducers: {
    openCreateTaskModal: (state) => {
      state.open = true;
    },
    closeCreateEditTaskModal: (state) => {
      state.open = false;
      state.isEditing = false;
    },
    openEditingTaskModal: (state, action) => {
      state.open = true;
      state.isEditing = true;
      state.editedTaskId = action.payload;
    },
  },
});

export const { openCreateTaskModal, closeCreateEditTaskModal, openEditingTaskModal } = createEditTaskModalSlice.actions;

export default createEditTaskModalSlice.reducer;
