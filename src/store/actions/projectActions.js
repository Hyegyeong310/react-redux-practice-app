import firebase from 'firebase/app';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR';

export const createProject = project => {
  return (dispatch, getState) => {
    const {
      firebase: {
        profile,
        auth: { uid: authorId }
      }
    } = getState();
    firebase
      .firestore()
      .collection('projects')
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: CREATE_PROJECT, project });
      })
      .catch(err => {
        dispatch({ type: CREATE_PROJECT_ERROR, err });
      });
  };
};
