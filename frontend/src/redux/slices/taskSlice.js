import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  expiredTasks: 0,
  activeTasks: 0,
  completedTasks: 0,
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // You can define additional reducers here if needed
    setTasks: (state, action) => {
      const { allTasks } = action.payload
      let activeTasksCount = 0;
      let expiredTasksCount = 0;
      let completedTasksCount = 0;
      allTasks.forEach(task => {
        if (task.status != 'expires') {
          if (task.status == 'progress') {
            activeTasksCount++;
          }
          else if (task.status == 'done') {
            completedTasksCount++;
          }
        } else if (task.status == 'expires') {
          expiredTasksCount++;
        }
      });
      state.tasks = action.payload.allTasks;
      state.activeTasks = activeTasksCount;
      state.expiredTasks = expiredTasksCount;
      state.completedTasks = completedTasksCount;
    },
    addTask: (state, action) => {
      console.log('task come in addTask Redux --> '+JSON.stringify(action.payload))
      const { task } = action.payload
      state.tasks.push(task);
      if (task.status == 'progress') {
        state.activeTasks++;
      }
      else if (task.status == 'done') {
        state.completedTasks++;
      }
    },
    updateTask: (state, action) => {
      const { task } = action.payload;
      state.tasks = state.tasks.map((prevTask) => {
        if (prevTask._id == task._id) {
          if (prevTask.status != task.status) {
            if (prevTask.status == 'progress') {
              state.activeTasks--;
              state.completedTasks++;
            } else if (prevTask.status == 'done') {
              state.completedTasks--;
              state.activeTasks++;
            }
          }
          return task;
        } else {
          return prevTask;
        }
      })
    },
    deleteTask: (state, action) => {
      const { task } = action.payload;
      state.tasks = state.tasks.filter((prevTask) => prevTask._id.toString() != task._id.toString())
      if (task.status == 'progress') {
        state.activeTasks--;
      } else if (task.status == 'done') {
        state.completedTasks--;
      } else {
        state.expiredTasks--;
      }
    }

  },

});

export const { addTask, setTasks, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
