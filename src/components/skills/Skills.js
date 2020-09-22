import React, { useState, useEffect } from 'react';
import { OverlayTrigger, ProgressBar, Tooltip } from 'react-bootstrap';
import professionSkills from '../../data/professionSkills';

const Skills = () => {

    useEffect(() => {
        fetchSkills();
    },[]);

    const [skills, setSkills] = useState([]);

    const fetchSkills = () => {
        const data = professionSkills.skills;
        setSkills(data);
    };

    return (
        <div className="Skills">
            {
                skills.map(skill => (
                    <div key={ skill.id }>
                        <p  className="skill-name" >{ skill.name }</p>
                        <OverlayTrigger placement="top" overlay={<Tooltip id="progress-tooltip">{ skill.name }</Tooltip>}>
                        
                            <ProgressBar now={ skill.progress } />
                                          
                        </OverlayTrigger>
                    </div>
             ))
            }
        </div>
    )
}

export default Skills;
