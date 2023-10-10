import { createSlice } from '@reduxjs/toolkit';
import {
//   fetchOperations 
} from './my-account-operations';
import { personalInfoPlaceholder,passwordPlaceholder,sshKeyPlaceholder } from '../../helpers/localDB';

const pending = state => {
  state.isLoading = true;
  state.error = null;
};
const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const myAccount = createSlice({
  name: 'myAccount',
  initialState: {
    nameFieldInState:'somedata',
    personalInfo:personalInfoPlaceholder,
    password:passwordPlaceholder,
    sshKey:sshKeyPlaceholder,
    isLoading: true,
    error: null,
  },

  reducers: {
    // =================   local operations to state ==================
    // nameReducer: (state, action) => {
    //   state.nameFieldInState = action.payload;
    // },
    personalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    password: (state, action) => {
      state.password = action.payload;
    },
    sshKey: (state, action) => {
      console.log(action)
      state.sshKey = action.payload;
    },
  },
  extraReducers: {
    // await operations to API and set to state
    // example 
    //         [nameThunk.fulfilled]: (state, action) => {
    //          console.log(action);
    //          state.nameFieldInState = action.payload;
    //          state.isLoading = false;
    //          state.error = null;
    //          },
    //          [nameThunk.pending]: state => {
    //          pending(state);
    //          },
    //          [nameThunk.rejected]: (state, action) => {
    //          rejected(state, action); 
    //          },
    },
});

export const { nameReducer,personalInfo,password,sshKey} = myAccount.actions;
export const myAccountReducer = myAccount.reducer;

// Selectors 
export const getPersonalInfo = state => state.myAccount.personalInfo;
export const getPassword = state => state.myAccount.password;
export const getSshKey = state => state.myAccount.sshKey;
export const getLoading = state => state.myAccount.isLoading;
export const getError = state => state.myAccount.error;

// Selectors example
//                  export const get"nameStateField" = state => state.myAccont.nameStateKey;
//                  export const getLoading = state => state.myAccount.isLoading;
//                  export const getError = state => state.myAccount.error;