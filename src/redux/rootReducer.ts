import { combineReducers } from '@reduxjs/toolkit'

import { commonReducer } from './common.slice'

import { authReducer } from '@/features/auth/auth.slice'

const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
