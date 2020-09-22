import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function SideBar(props) {

    

  
    const [ year, setYear ] = useState();

    const [ aria_expand, setAria] = useState(false);

    const [ icons, setIcon ] = useState(<i className="fas fa-bars"></i>);

    useEffect(() => {
        Year();
    },[]);

    const toggle = () => {
        if(aria_expand === false){
            setAria(true);
            setIcon(<i className='fas fa-times'></i>);
        } else {
            setAria(false);
            setIcon(<i className='fas fa-bars'></i>);
        }
    }



    const Year = () => {
        const data = new Date();
        const getyear = data.getFullYear();
        setYear(getyear);
    }

    return (
        <div className="sidebar">
            
            <div className="navbar-expand-md">
                <button className="navbar-toggler navbar_toggler_icon" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded={ aria_expand } aria-label="Toggle navigation" onClick={() => toggle()}>
                    { icons }
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ListGroup>
                        <ListGroup.Item className="top">
                            Portfolio of <span className="name">Sanjoy Kumar Saha</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <NavLink to="/" className="links">
                                Home
                            </NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <NavLink to="/about" className="links">
                                About
                            </NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <NavLink to="/portfolio" className="links">
                                Portfolio
                            </NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <a href="https://drive.google.com/file/d/1x_mknC86tkMaePTxXDVUKogyfLl7bNFy/view?usp=sharing" className="links">
                                Resume
                            </a>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <NavLink to="/contact" className="links">
                                Contact
                            </NavLink>
                        </ListGroup.Item>
                        <div className="sidebar-footer">
                            <ListGroup.Item>
                                <a href="https://www.facebook.com/sahaksanjoy/" className="social-icons"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://github.com/sanjoyksaha" className="social-icons"><i className="fab fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/sanjoyksaha/" className="social-icons"><i className="fab fa-linkedin"></i></a>
                                <a href="https://www.instagram.com/sanjoyksaha/?hl=en" className="social-icons"><i className="fab fa-instagram"></i></a>
                            </ListGroup.Item>
                        </div>
                        <div className="copy">
                            <ListGroup.Item>
                                <p>&copy; { year } Sanjoy Kumar Saha</p>
                            </ListGroup.Item>
                        </div>
                    </ListGroup>
                </div>
            </div>
        </div>
    )
}
export default SideBar
