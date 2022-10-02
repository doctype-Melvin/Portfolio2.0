import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import projects from '../projects';

function Projects({ isPreview }) {
  let projectsToShow = projects;
  if (isPreview) {
    projectsToShow = projects.slice(0, 6);
  }
  return (
    <section id="projects">
      <div className="container text-center">
        <h1 className="text-center mb-5">Projects</h1>
        <div className="row">
          {projectsToShow.map(project =>
            <Card
              key={project.key}
              hrefSource={project.hrefSource}
              imageSource={project.imageSource}
              projectName={project.projectName}
            />
          )}
        </div>
        {isPreview ? (
          <Link to='/projects'>
            <button className="btn btn-outline-dark">
              <div className='url-text'>More!</div>
            </button>
          </Link>
        ) : (
          <Link to='/'>
            <button className="btn btn-outline-dark">
              <div className='url-text'>Profile</div>
            </button>
          </Link>
        )}
      </div>
    </section>
  );
}

export default Projects;