import React from 'react';
import govtcollegelogo from '../images/govt-college-logo.png';
import govtlogo from '../images/govt-logo.png';

export default function Headsec() {
    return (
        <div className='heading-section'>
            <div>
                <img
                    src={govtcollegelogo}
                    alt='Govt-college-logo'
                    style={{ width: '7.5vw' }}
                ></img>
            </div>
            <div>
                <div className='college-name'>
                    <strong>
                        {' '}
                        Government College Of Engineering And Research, Avasari
                        Khurd
                    </strong>
                </div>
                <h3 style={{ color: 'black' }}>
                    Taluka-Ambegaon, Dist.-Pune, 412405
                </h3>
            </div>
            <div className='imagediv'>
                <img
                    src={govtlogo}
                    alt='Govt-logo'
                    style={{ width: '8vw' }}
                ></img>
            </div>
        </div>
    );
}
