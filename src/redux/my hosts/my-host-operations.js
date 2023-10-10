import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// fetchMyAccountThunk.pending - eto loading
// fetchMyAccountThunk.fulfilled - eto success
// fetchMyAccountThunk.rejected - eto error

//  otmena fetcha 
// useEffect()=> {
//    const promise = dispatch(nashdispatch);
//     return () => {
//         promise.abort()
//     }
// }


// example 
//      export const fetchMyAccountThunk = createAsyncThunk(
//          'contacts/fetchMyAccountThunk',
//          async (_, { rejectWithValue }) => {
//          try {
//          const result = await axios.get(`/contacts`);
//          return result.data; //- etot return eto payload pri success!
//          } catch (error) {
//          return rejectWithValue(error);
//          }
//       });  

