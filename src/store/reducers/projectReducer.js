import { CREATE_PROJECT } from '../actions/projectActions';

const initState = {
  projects: [
    { id: '1', title: 'project title 1', content: 'blah blah blah' },
    { id: '2', title: 'project title 2', content: 'blah blah blah' },
    { id: '3', title: 'project title 3', content: 'blah blah blah' }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.project]
      };
    default:
      return state;
  }
};

export default projectReducer;
