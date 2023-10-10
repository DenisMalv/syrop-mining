import { createSlice } from '@reduxjs/toolkit';
import {
//   fetchOperations 
} from './earnings-operations';
import { balance_db,earnings_db,transactionsHistory_db } from '../../helpers/localDB';

const pending = state => {
  state.isLoading = true;
  state.error = null;
};
const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const earnings = createSlice({
  name: 'earnings',
  initialState: {
    nameFieldInState:'somedata',
    balance:balance_db,
    earnings:earnings_db,
    transactionsHistory:transactionsHistory_db,
    isLoading: true,
    error: null,
  },

  reducers: {
    // local operations to state
    nameReducer: (state, action) => {
      state.nameFieldInState = action.payload;
    },
    balance: (state, action) => {
      state.balance = action.payload;
    },
    earnings_reducer: (state, action) => {
      state.earnings = action.payload;
    },
    transactionsHistory: (state, action) => {
      state.transactionsHistory = action.payload;
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

export const { nameReducer,balance,earnings_reducer,transactionsHistory } = earnings.actions;
export const earningsReducer = earnings.reducer;

// Selectors 
export const getBalance = state => state.earnings.balance;
export const getEarnings= state => state.earnings.earnings;
export const getTransactionsHistory = state => state.earnings.transactionsHistory;
export const getLoading = state => state.earnings.isLoading;
export const getError = state => state.earnings.error;

// Selectors example
//                  export const get"nameStateField" = state => state.nameStateField.nameStateKey;
//                  export const getLoading = state => state.myAccount.isLoading;
//                  export const getError = state => state.myAccount.error;