import React, { useEffect } from 'react';
import './contact.css';

function Contact() {

    useEffect(() => {
        document.title ="Contact";
    }, []);

    return (
        <div className="contact">
            <h1>Get In Touch</h1>
            <p>You can contact with me through email</p>
            <p>Email address: <span className="email">sanjoyksaha0@gmail.com</span></p>
            <p>You can also find me on:</p>
            <div className="social-links">
                <a href="https://www.facebook.com/sahaksanjoy/" target="_blank" className="social-icons"><i className="fab fa-facebook-f"></i></a>
                <a href="https://github.com/sanjoyksaha" target="_blank" className="social-icons"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/sanjoyksaha/" target="_blank" className="social-icons"><i className="fab fa-linkedin"></i></a>
                <a href="https://twitter.com/sanjoyksaha92" target="_blank" className="social-icons"><i className="fab fa-twitter"></i></a>
            </div>
        </div>
    )
}

export default Contact
