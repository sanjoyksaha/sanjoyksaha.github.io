import React, { useEffect} from 'react';
import { Image } from 'react-bootstrap';
import image from '../../images/sanjoy2.jpg';
import './home.css';

const Home = () => {

    useEffect(() => {
        document.title = "Home"
     }, []);
     
    return (
        <div className="home">
            <div className="details">
                <Image src={ image } />
                <h2>Sanjoy Kumar Saha</h2>
                <p className="lead">Full Stack Web Developer</p>
            </div>
        </div>
    )
}

export default Home
