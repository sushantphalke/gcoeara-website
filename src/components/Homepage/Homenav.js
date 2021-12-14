import React from 'react';
import { Link } from 'react-router-dom';

export default function Homenav() {
    return (
        <>
            <div className='homemenu'>
                <Link>
                    <div className='homenav-btn'>
                        <h5>Facilities</h5>
                    </div>
                </Link>
                <Link>
                    <div className='homenav-btn'>
                        <h4>About</h4>
                    </div>
                </Link>
                <Link to='/Home'>
                    <div className='homenav-btn'>
                        <h4>Home</h4>
                    </div>
                </Link>

                <Link to='/Department'>
                    <div className='homenav-btn'>
                        <h4>Departments</h4>
                    </div>
                </Link>
                <Link>
                    <div className='homenav-btn'>
                        <h4>Addmisions</h4>
                    </div>
                </Link>
                <Link>
                    <div className='homenav-btn'>
                        <h5>PlacementCell</h5>
                    </div>
                </Link>
            </div>
        </>
    );
}
