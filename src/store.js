import { configureStore } from '@reduxjs/toolkit'
import pasteReducer  from './redux/PasteS'


export const store = configureStore({
  reducer: {
    paste:pasteReducer,
  },
})