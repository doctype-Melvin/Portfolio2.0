import React from 'react';
import Card from './Card';
import projects from '../projects';

function Projects() {
  return (
    <section id="projects">
      <div className="container text-center">
        <h1 className="text-center mb-5">Projects</h1>
        <div className="row">
          {projects.map(project => <Card
            key={project.key}
            hrefSource={project.hrefSource}
            imageSource={project.imageSource}
            projectName={project.projectName}
          />)}
        </div>
        <button className="btn btn-outline-dark">
          <a className="url-text" href="projects.html">More!</a>
        </button>
      </div>
    </section>
  );
}

export default Projects;