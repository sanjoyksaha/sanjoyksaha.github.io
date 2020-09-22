import React, { useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import experiences from '../../data/experiences';

function Experience() {

    useEffect(() => {
        fetchExperience();
    }, []);

    const [experience, setExperience] = useState([]);

    const fetchExperience = () => {
        const data = experiences.experiences;
        setExperience(data);
    }

    return (
        <div className="experience">
            {
                experience.map(experience => (
                    <Col md={6} key={experience.id}>
                        <Card>
                            <Card.Body>
                                <p>{ experience.title }</p>
                                <p>{ experience.companyName }</p>
                                <p className="time"><i className="fas fa-calendar-alt"></i> {experience.time}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </div>
    )
}

export default Experience
