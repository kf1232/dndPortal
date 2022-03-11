import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './state/characterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})