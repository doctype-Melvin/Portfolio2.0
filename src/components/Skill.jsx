import React from 'react';


function Skill(props) {
    return <div className="col-6 col-md-2">
        <img className="skill-img" src={props.source} title="html icons" />
    </div>
}

export default Skill;