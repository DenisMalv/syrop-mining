import { createSlice } from '@reduxjs/toolkit';
import {
//   fetchOperations
} from './marketplase-operations';
import {placeholderAcordeonArray} from '../../helpers/localDB'
import {placeholderSlidersArray} from '../../helpers/localDB'

const pending = state => {
  state.isLoading = true;
  state.error = null;
};
const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const marketplase = createSlice({
  name: 'marketplase',
  initialState: {
    nameFieldInState:'somedata',
    acordeonArray:placeholderAcordeonArray,
    acordeonMutatedArray: placeholderAcordeonArray,
    slidersArray:placeholderSlidersArray,
    isLoading: true,
    error: null,
  },

  reducers: {
    // local operations to state
    nameReducer: (state, action) => {
      state.nameFieldInState = action.payload;
    },

    // SORT ACTION
    sortReducer: (state, action) => {
      console.log(action.payload);
      // const ascending = [...state.myInstances].sort((a, b) => a.price - b.price);
      // const numDescending = [...state.myInstances].sort((a, b) => b.price - a.price);
      console.log(state.myInstances);
      switch (action.payload.sort_type) {

        case "default":
          console.log("sort by default")
          break;
        case "by-price-low":
          state.acordeonMutatedArray = state.acordeonMutatedArray.sort((a, b) => {
            if(a.price > b.price) return 1;
            if(b.price > a.price) return -1;

            return 0;
          })
          break;
        case "by-price-high":
          state.acordeonMutatedArray = state.acordeonMutatedArray.sort((a, b) => {
            if(a.price < b.price) return 1;
            if(b.price < a.price) return -1;

            return 0;
          })
          break;
        case "by-tflops":
          console.log("sort by tflops")

          break;
      }

      console.log(action.payload.sort_type);
      console.log("currentState: ", state.acordeonArray);
    },

    // SET FILTER OPTIONS

    // FILTER ACTIONS
    filterCountryReducer: () => {

    },
    filterGPUReducer: (state, action) => {
      const formatString = (str) => str.replace(" ", "").toLowerCase();
      if(action.payload.filter_type !== "default") {
        state.acordeonMutatedArray = state.acordeonArray
            .filter(acordeonData => formatString(acordeonData.name) === formatString(action.payload.filter_type))
      }
      if(action.payload.filter_type === "default") {
        state.acordeonMutatedArray = state.acordeonArray;
      }
    },
    searchGPUByName: (state, value) => {
      console.log(state.acordeonArray, value);
      state.acordeonMutatedArray = state.acordeonArray.filter(item => item.name.toLowerCase().includes(value.payload.toLowerCase())); 
    }
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

export const { nameReducer, sortReducer, filterGPUReducer, searchGPUByName } = marketplase.actions;
export const marketplaceReducer = marketplase.reducer;

// Selectors
export const getAccordeonArray = state => state.marketplase.acordeonArray;
export const getSliders = state => state.marketplase.slidersArray;
export const getLoading = state => state.marketplase.isLoading;
export const getError = state => state.marketplase.error;

// Selectors example
//                  export const get"nameStateField" = state => state.nameStateField.nameStateKey;
//                  export const getLoading = state => state.myAccount.isLoading;
//                  export const getError = state => state.myAccount.error;
