import React from 'react';
import Skill from './Skill'
import skills from '../skills';


function Expertise() {
    return (
        <section id="expertise">
        <div className="container text-center">
          <h1 className="text-center mb-5">Expertise</h1>
          <div className="row my-5">
          {skills.map(skill => <Skill key={skill.key} source={skill.src}/> )}
          </div>
        </div>
      </section>
    )
}

export default Expertise;