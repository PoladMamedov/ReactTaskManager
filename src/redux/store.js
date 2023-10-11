import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createEditTaskModalReducer from "./slices/createEditTaskModalSlice";
import deleteTaskModalReducer from "./slices/deleteTaskModalSlice";
import tasksReducer from "./slices/tasksSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["createEditTaskModal", "deleteTaskModal"],
};

const rootReducer = combineReducers({
  createEditTaskModal: createEditTaskModalReducer,
  deleteTaskModal: deleteTaskModalReducer,
  tasks: tasksReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
