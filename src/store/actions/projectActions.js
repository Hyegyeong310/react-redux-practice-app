export const CREATE_PROJECT = 'CREATE_PROJECT';

export const createProject = project => {
  return (dispatch, getState) => {
    // TODO: async function call
    dispatch({ type: CREATE_PROJECT, project });
  };
};
