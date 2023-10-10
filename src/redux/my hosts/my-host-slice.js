import { createSlice } from '@reduxjs/toolkit';
import {
//   fetchOperations 
} from './my-host-operations';

const pending = state => {
  state.isLoading = true;
  state.error = null;
};
const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const myHosts = createSlice({
  name: 'myHosts',
  initialState: {
    nameFieldInState:'somedata',
    prices:{one_demand_price:0.169, mid_bid_ptice:0.169, storage_price:0.999},
    internet:{upload_price:0.1, download_price:0.01 },
    gpu:{min_gpu:1,},
    availableUntil:{date:Date.now(),time:''},
    isLoading: true,
    error: null,
  },

  reducers: {
    // local operations to state
    nameReducer: (state, action) => {
      state.nameFieldInState = action.payload;
    },
    setPrices: (state, action) => {
      console.log(action)
      state.prices = action.payload;
    },
    setInternet: (state, action) => {
      state.internet = action.payload;
    },
    setGpu: (state, action) => {
      state.gpu = action.payload;
    },
    setAvailableUntil: (state, action) => {
      state.availableUntil = action.payload;
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

export const { nameReducer,setPrices,setInternet,setGpu,setAvailableUntil } = myHosts.actions;
export const myHostsReducer = myHosts.reducer;

//SELECTORS 
export const getPrices = state => state.myHosts.prices;
export const getInternet = state => state.myHosts.internet;
export const getGpu = state => state.myHosts.gpu;
export const getAvailableUntil = state => state.myHosts.availableUntil;
export const getLoading = state => state.myHosts.isLoading;
export const getError = state => state.myHosts.error;

// Selectors example
//                  export const get"nameStateField" = state => state.nameStateField.nameStateKey;
//                  export const getLoading = state => state.myAccount.isLoading;
//                  export const getError = state => state.myAccount.error;