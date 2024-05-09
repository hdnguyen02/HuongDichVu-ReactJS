import { createSlice } from '@reduxjs/toolkit'
import { baseUrl, userInfoUrl } from '../global'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    credential: null,
    isAuthenticated: false

  },
  reducers: {
    setCredential: (state, credential) => {
      state.credential = credential
    },
    setIsAuthenticated: (state, isAuthenticated) => {
      console.log("hàm được gọi");
      state.isAuthenticated = isAuthenticated
    }
    
  }

})

export const { setCredential, setIsAuthenticated } = userSlice.actions

export default userSlice.reducer  