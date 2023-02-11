import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import callReducer from '../features/calls/callSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    calls: callReducer,
  },
})





// import { configureStore } from '@reduxjs/toolkit';


// export const store = configureStore({
//   reducer: {},
// });
