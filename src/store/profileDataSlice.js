import { createSlice } from "@reduxjs/toolkit";

const profileDataSlice = createSlice({
  name: "profileData",
  initialState: {},
  reducers: {
    updateProfileData(state, action) {
      return (state = action.payload);
    },
  },
});
export const { updateProfileData } = profileDataSlice.actions;
export default profileDataSlice.reducer;
