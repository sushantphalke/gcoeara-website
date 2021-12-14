import React from 'react';
import principalimg from '../images/principalimg.jpg';
import video from '../images/video.jpg';
export default function Principalmsg() {
    return (
        <>
            <hr />
            <div
                style={{
                    border: '1px solid white',
                    backgroundImage:
                        'linear-gradient(to bottom ,rgba(255, 228, 181, 0.842),rgba(255, 255, 255, 0.842))',
                    borderRadius: '0.8vw',
                }}
            >
                <h1 style={{ color: 'maroon', margin: '30px' }}>
                    PRINCIPAL'S MESSAGE
                </h1>
                <div className='principalmsg '>
                    <div
                        className='card mb-3'
                        style={{
                            maxWidth: '50vw',
                            justifyContent: 'center',
                            textAlign: 'center',
                           
                        }}
                    >
                        <div className='row g-0 onhovereffect'>
                            <div className='col-md-4'>
                                <img
                                    style={{
                                        borderRadius: '10px',
                                        margin: '5px',
                                    }}
                                    src={principalimg}
                                    className='img-fluid rounded-start'
                                    alt='...'
                                />
                            </div>
                            <div className='col-md-8'>
                                <div
                                    className='card-body'
                                    style={{ textAlign: 'left' }}
                                >
                                    <h4 className='card-text'>
                                        It is indeed a pleasure to welcome you
                                        all to Government College of Engineering
                                        and Research, Avasari. Our Institute,
                                        spread over 50 acres of land, is located
                                        in nature’s lap with pollution free and
                                        conducive study environment.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='campus-visuals onhovereffect'>
                        <h3 style={{ color: 'slategrey' }}>
                            VISUAL TOUR OF CAMPUS
                        </h3>
                        <br />
                        <img
                            src={video}
                            alt='video'
                            style={{ margin: '9px' }}
                        ></img>
                    </div>
                </div>
            </div>
        </>
    );
}
