import { createSlice } from '@reduxjs/toolkit';
import {
//   fetchOperations 
} from './credit-limit-operations';
import { totalBalance, creditLimitPlaceholder } from '../../helpers/localDB';

const pending = state => {
  state.isLoading = true;
  state.error = null;
};
const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const creditLimit = createSlice({
  name: 'creditLimit',
  initialState: {
    nameFieldInState:'somedata',
    totalBalance:totalBalance,
    creditLimit:creditLimitPlaceholder,
    isLoading: true,
    error: null,
  },

  reducers: {
    // local operations to state
    nameReducer: (state, action) => {
      state.nameFieldInState = action.payload;
    },
    changeTotalBalanse: (state, action) => {
      state.totalBalance = action.payload;
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

// Actions
export const { nameReducer,changeTotalBalanse } = creditLimit.actions;
export const creditLimitReducer = creditLimit.reducer;

// Selectors 

export const getTotalBalance = state => state.creditLimit.totalBalance;
export const getCreditLimit = state => state.creditLimit.creditLimit;
export const getLoading = state => state.creditLimit.isLoading;
export const getError = state => state.creditLimit.error;

// Selectors example
//                  export const get"nameStateField" = state => state.nameStateField.nameStateKey;
//                  export const getLoading = state => state.myAccount.isLoading;
//                  export const getError = state => state.myAccount.error;