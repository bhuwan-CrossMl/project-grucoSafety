import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  userInfo: {},
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
        localStorage.setItem('accessToken',state.accessToken) // deletes token from storage 
        state.loading = false
        state.userInfo = null
        state.accessToken = null
    },
    logout: (state, action) => {
        localStorage.clear();   // clear every thing from storage
        state.loading = false
        state.userInfo = null
        state.accessToken = null
    },
  },
});



export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
