import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
  accessToken: '',
  link: null,
  platformFunctions: [],
  platformFunctionCodes: [],
  resetPasswordEmail: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
})

export const {} = authSlice.actions

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'platformFunctions', 'platformFunctionCodes']
}

export const LOCAL_STORAGE_AUTH_KEY = 'persist:auth'

export const authReducer = persistReducer(authConfig, authSlice.reducer)
