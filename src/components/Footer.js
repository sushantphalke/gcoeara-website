import React from 'react';
import uselogo1 from '../images/usefull-logo-1.jpg';
import uselogo2 from '../images/usefull-logo-2.jpg';
import uselogo3 from '../images/usefull-logo-3.jpg';
import uselogo4 from '../images/usefull-logo-4.jpg';
import uselogo5 from '../images/usefull-logo-5.jpg';

export default function Footer() {
    return (
        <>
            {' '}
            <hr />
            <div
                style={{
                    border: '1px solid white',
                    backgroundImage:
                        'linear-gradient(to bottom ,rgba(255, 228, 181, 0.842),rgba(255, 255, 255, 0.842))',borderRadius:'0.8vw'
                }}
            >
                <div className='footer'>
                    <div className='footer-logoline'>
                        <img src={uselogo1} alt='logo' />
                    </div>
                    <div className='footer-logoline'>
                        <img src={uselogo2} alt='logo' />
                    </div>
                    <div className='footer-logoline'>
                        <img src={uselogo3} alt='logo' />
                    </div>
                    <div className='footer-logoline'>
                        <img src={uselogo4} alt='logo' />
                    </div>
                    <div className='footer-logoline'>
                        <img src={uselogo5} alt='logo' />
                    </div>
                </div>
                <div className='copyright'>
                    <strong>Copyright © GCOEAR, Avasari Khurd</strong>
                </div>
                <div className='copyright-info'>
                    Mandatory Disclosure | RTI Officers | RTI Information Part
                    II | Citizen Charter | College Development Committee |
                    Quotations
                </div>
                <strong>
                    <hr />{' '}
                    <div className='copyright'>
                        <p>
                            Developed & Managed by Government College of
                            Engineering & Research Avasari ,Pune.
                            <br />
                            <code style={{ fontSize: '150%' }}>
                                {' '}
                                TEAM 1 DESIGN FOR WEBSITE{' '}
                            </code>
                        </p>
                    </div>
                </strong>
            </div>
        </>
    );
}
