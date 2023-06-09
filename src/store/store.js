import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import profileDataReducer from "./profileDataSlice";
import allUsersReducer from "./allUsersSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  auth: authReducer,
  profileData: profileDataReducer,
  allUsers: allUsersReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     profileData: profileDataReducer,
//   },
// });
export default store;
