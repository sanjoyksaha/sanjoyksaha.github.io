import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {

    const NotFound = {
        backgroundColor: '#1e272e',
        width: '100%',
        height: '590px',
        marginTop: '30px',
        color: '#fff',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        paddingTop: '120px',
        
    }

    const link = {
        border: "1px solid #fff",
        padding: "8px 10px 8px 10px",
        color: "#fff",
        marginLeft: "5px",
    }


    return (
        <div className="NotFound ">
            <div style={ NotFound }>
                <h1>404 Page Not Found</h1>
                <p>Go Back To Home Page <Link to="/" style={ link }>Home</Link></p>
            </div>
        </div>
    )
}

export default NotFound
