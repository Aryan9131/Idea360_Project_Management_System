import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
  expiredProjects: 0,
  activeProjects: 0,
  completedProjects: 0,
}

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    // You can define additional reducers here if needed
    setProjects: (state, action) => {
      console.log('projects et in redux --> '+JSON.stringify(action.payload))
      const { allProjects } = action.payload
      let activeProjectsCount = 0;
      let expiredProjectsCount = 0;
      let completedProjectsCount = 0;
      allProjects.forEach(project => {
        if (project.status != 'expires') {
          if (project.status == 'progress') {
            activeProjectsCount++;
          }
          else if (project.status == 'done') {
            completedProjectsCount++;
          }
        } else if (project.status == 'expires') {
          expiredProjectsCount++;
        }
      });
      state.projects = action.payload.allProjects;
      state.activeProjects = activeProjectsCount;
      state.expiredProjects = expiredProjectsCount;
      state.completedProjects = completedProjectsCount;
    },
    addProject: (state, action) => {
      const { project } = action.payload
      state.projects.push(project);
      if (project.status == 'progress') {
        state.activeProjects++;
      }
      else if (project.status == 'done') {
        state.completedProjects++;
      }
    },
    updateProject: (state, action) => {
      const { project } = action.payload;
      state.projects = state.projects.map((prevProject) => {
        if (prevProject._id == project._id) {
          if (prevProject.status != project.status) {
            if (prevProject.status == 'progress') {
              state.activeProjects--;
              state.completedProjects++;
            } else if (prevProject.status == 'done') {
              state.completedProjects--;
              state.activeProjects++;
            }
          }
          return project;
        } else {
          return prevProject;
        }
      })
    },
    deleteProject: (state, action) => {
      const { project } = action.payload;
      state.projects = state.projects.filter((prevProject) => prevProject._id.toString() != project._id.toString())
      if (project.status == 'progress') {
        state.activeProjects--;
      } else if (project.status == 'done') {
        state.completedProjects--;
      } else {
        state.expiredProjects--;
      }
    }

  },

});

export const { addProject, setProjects, updateProject, deleteProject } = projectSlice.actions;
export default projectSlice.reducer;
