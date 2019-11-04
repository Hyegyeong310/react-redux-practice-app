import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetail = props => {
  const { auth, project } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by The {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  const {
    firestore: {
      data: { projects }
    }
  } = state;
  const {
    firebase: { auth }
  } = state;
  const project = projects && projects[id];
  return {
    project,
    auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetail);
