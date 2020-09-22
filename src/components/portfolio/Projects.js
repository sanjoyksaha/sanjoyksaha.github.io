import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Projects = (props) => {
    
    const { projects } = props;

    return (
        <div className="Projects">
            <Row>
                {
                    projects.map(project => (
                        <Col md={6} lg={6} xl={4} key={ project.slug }>
                            <Card className="projects">
                                <Card.Body >
                                    <Card.Title>
                                        <i className="fas fa-project-diagram"></i>
                                        { 
                                            project.github && (
                                                <a href={`${project.github}`} className="social-icons">
                                                    <i className="fab fa-github"></i>
                                                </a>
                                        )}

                                        { 
                                            project.website && (
                                                <a href={`${project.website}`} className="social-icons">
                                                    <i className="fas fa-globe"></i>
                                                </a>
                                        )}
                                        
                                    </Card.Title>
                                    <h5 className="title">{ project.title }</h5>
                                    <p className="description">{ project.description }</p>
                                    <p className="using-tools">{ project.usingtools }</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Projects
