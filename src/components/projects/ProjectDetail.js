import React from 'react';

const ProjectDetail = props => {
  const {
    match: {
      params: { id }
    }
  } = props;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            amet velit error non nostrum officia incidunt, ea itaque! Id facere
            distinctio dolore obcaecati saepe minus quisquam repellat doloremque
            accusantium eveniet.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Betty</div>
          <div>3rd November, 5pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
