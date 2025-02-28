import { configureStore } from '@reduxjs/toolkit';
import userReducer  from '../slices/userSlice'; 
import taskReducer from '../slices/taskSlice'
import projectReducer from '../slices/projectSlice'

const store = configureStore({
  reducer: {  // Adding all reducers
    user: userReducer , 
    tasks:taskReducer,
    projects:projectReducer
  },
});

export default store;
