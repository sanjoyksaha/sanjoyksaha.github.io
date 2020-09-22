import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap';
import './about.css';

// import SkillData from '../../skillData';
import Skills from '../skills/Skills';
import Experience from './Experience';

const About = () => {

    useEffect(() => {
        document.title = "About Me";
    },[]);

    return (
        <div className="about">
            <Col md={{span: 6}}>
                <h1>About Me</h1>
            </Col>
            <Col md={ 12 }>
                <p>I am a person who is an enthusiastic, a very quick learner. Always enjoying what I do. Learning something new is more interesting for me. I can provide the best web-based solutions with interactive ideas, features, and designs. </p>
                {/* <p>Besides, I love to travelling, watching movies, cycling.</p> */}
                <h1>Skills: </h1>
                <Skills />
                <h1>Professional Experiences: </h1>
                <Experience />
            </Col>
        </div>
    )
}

export default About
