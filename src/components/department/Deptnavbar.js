import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Deptnavbar() {
    return (
        <>
            <div className='menu'>
                <Link to='/'>
                    <li className='navbar-btn'>Home</li> <hr />
                </Link>
                <Link to='/Department'>
                    <li className='navbar-btn'>Departments</li>
                    <hr />
                </Link>
                <li className='navbar-btn'>Facilities</li>
                <hr />
                <li className='navbar-btn'>Addmisions</li>
                <hr />
                <li className='navbar-btn'>Notices</li>
                <hr />
                <li className='navbar-btn'>Staff</li>
                <hr />
                <li className='navbar-btn'>Achivements</li>
                <hr />
                <li className='navbar-btn'>Laboratories</li>
                <hr />
                <li className='navbar-btn'><Link to='Deptabout'>About</Link></li>
                <hr />
                <li className='navbar-btn'><Link to='/Abouthod'>HOD,s msg</Link></li>
            </div>
        </>
    );
}
