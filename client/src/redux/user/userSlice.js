import {createSlice} from '@reduxjs/toolkit';
// import SignIn from '../../pages/SignIn';

const initialState={
    currentUser:null,
    loading:false,
    error:false,

};

const userSlice = createSlice({
    // name: 'user',
    // initialState:{
    //     loading:false,
    //     error:null,
    // },
    // reducers: {
    //   signInStart(state) {
    //     state.loading = true;
    //     state.error = null;
    //   },
    //   signInSuccess(state, action) {
    //     state.loading = false;
    //     state.user = action.payload;
    //   },
    name: 'user',
    initialState,
    reducers: {
      signInStart: (state) => {
        state.loading = true;
      },
      signInSuccess: (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = false;
      },
      signInFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  
export const {signInStart,signInSuccess,signInFailure} = userSlice.actions;

export default userSlice.reducer;