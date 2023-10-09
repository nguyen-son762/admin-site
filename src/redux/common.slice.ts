import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CommonState = {
  showSidebar: boolean
}

const initialState: CommonState = {
  showSidebar: false
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setShowSidebar: (state, action: PayloadAction<boolean>) => {
      state.showSidebar = action.payload
    }
  }
})

export const { setShowSidebar } = commonSlice.actions

export const commonReducer = commonSlice.reducer
