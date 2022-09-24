import React from 'react';

function Card(props) {
    return (
        <div className="col-12 col-md-6 col-lg-4">
        <a className="url-text" href={ props.hrefSource } target="_blank">
          <img className="project-img" src={ props.imageSource }
             alt="opps!" />
          <p>{ props.projectName }</p>
        </a>
      </div>
    );
}

export default Card;