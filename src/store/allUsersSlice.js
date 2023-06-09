import { createSlice } from "@reduxjs/toolkit";
const allUsersSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    setUser(state, action) {
      state.push(action.payload);
    },
  },
});
export const { setUser } = allUsersSlice.actions;
export default allUsersSlice.reducer;
