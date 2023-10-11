import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createTaskModalReducer from "./slices/createTaskModalSlice";
import deleteTaskModalReducer from "./slices/deleteTaskModalSlice";
import tasksReducer from "./slices/tasksSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["createTaskModal", "deleteTaskModal"],
};

const rootReducer = combineReducers({
  //   items: itemsReducer,
  //   favItems: favItemsReducer,
  //   cartItems: cartItemsReducer,
  createTaskModal: createTaskModalReducer,
  deleteTaskModal: deleteTaskModalReducer,
  tasks: tasksReducer,
  //   selectedItem: selectedItemReducer,
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
