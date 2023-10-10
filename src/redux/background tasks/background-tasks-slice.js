import { createSlice } from '@reduxjs/toolkit';
import {
//   fetchOperations 
} from './background-tasks-operations';

const pending = state => {
  state.isLoading = true;
  state.error = null;
};
const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const backgroundTasks = createSlice({
  name: 'backgroundTasks',
  initialState: {
    nameFieldInState:'somedata',
    isLoading: true,
    error: null,
  },

  reducers: {
    // local operations to state
    nameReducer: (state, action) => {
      state.nameFieldInState = action.payload;
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

export const { nameReducer, } = backgroundTasks.actions;
export const backgroundTasksReducer = backgroundTasks.reducer;

// Selectors example
//                  export const get"nameStateField" = state => state.nameStateField.nameStateKey;
//                  export const getLoading = state => state.myAccount.isLoading;
//                  export const getError = state => state.myAccount.error;