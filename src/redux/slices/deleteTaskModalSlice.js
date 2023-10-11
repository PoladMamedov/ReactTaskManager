import { createSlice } from "@reduxjs/toolkit";

const deleteTaskModalSlice = createSlice({
  name: "deleteTaskModalOpen",
  initialState: {
    open: false,
    deletingId: "",
  },
  reducers: {
    openDeleteTaskModal: (state, action) => {
      state.open = true;
      state.deletingId = action.payload;
    },
    closeDeleteTaskModal: (state) => {
      state.open = false;
      state.deletingId = "";
    },
  },
});

export const { openDeleteTaskModal, closeDeleteTaskModal } = deleteTaskModalSlice.actions;

export default deleteTaskModalSlice.reducer;
