import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar() {
    return (
        <>
            
            <div className='menu'>
            <li className='navbar-btn'><Link to="/">Home</Link></li>
            <hr /> <li className='navbar-btn'><Link to="/Department">Departments</Link></li>
            <hr /> <li className='navbar-btn'>Facilities</li>
            <hr /> <li className='navbar-btn'>Addmisions</li>
            <hr /> <li className='navbar-btn'>Notices</li>
            <hr /> <li className='navbar-btn'>Placement Cell</li>
            <hr /> <li className='navbar-btn'>Student's Sec</li>
            <hr /> <li className='navbar-btn'>News & Events</li>
            <hr /> <li className='navbar-btn'><Link to='/Principalmsg'>Principal's msg</Link></li>
            <hr /> <li className='navbar-btn'>Campus Tour</li>

        </div>
           
        </>
    );
}
