import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



// Initial state
const initialState = {
  user: null,
  loading: false,
  error: null,
  searchQuery:""
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // You can define additional reducers here if needed
    clearUser: (state) => {
      state.user = null;
      state.error = null;
    },
    setUser:(state, action)=>{
      state.user=action.payload.user
    },
    setSearchQuery:(state, action)=>{
      console.log("search query set __>"+JSON.stringify(action.payload))
      state.searchQuery=action.payload
    },
  },
 
});

export const { clearUser,setUser, setSearchQuery } = userSlice.actions;
export default userSlice.reducer;
