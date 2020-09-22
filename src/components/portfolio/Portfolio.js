import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import Store from '../../data/store';
import Projects from './Projects';
import './portfolio.css';

const Portfolio = () => {

    useEffect(() => {
        fetchProjects();
        document.title = "Portfolio"
    }, []);

    const [projects, setProjects] = useState([]);

    const fetchProjects = () => {
        const projects = Store.projects;
        setProjects(projects);
    };


    return (
        <div className="portfolio">
            <Col md={{span: 4}}>
                <h1>Featured Projects</h1>
            </Col>
    
            <Projects projects={ projects }/>
        </div>
    )
}

export default Portfolio
