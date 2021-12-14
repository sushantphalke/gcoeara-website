import React from 'react';
import comphodimg from '../images/comphodimg.jpg';
import video from '../images/video.jpg';

export default function Abouthod() {
    return (
        <>
            <div
                style={{
                    border: '1px solid white',
                    backgroundImage:
                        'linear-gradient(to bottom ,rgba(0, 0, 150, 0.3433),rgba(150, 0, 0, 0.3433))',
                    borderRadius: '0.8vw',
                }}
            >
                <h1 style={{ color: 'white', margin: '30px' }}>
                    <hr />
                    HEAD OF DEPARTMENT
                </h1>
                <div className='principalmsg '>
                    <div
                        className='card mb-3'
                        style={{
                            maxWidth: '540px',
                            justifyContent: 'center',
                            textAlign: 'center',
                            borderRadius: '0.4vw',
                        }}
                    >
                        <div
                            className='row g-0 '
                            style={{
                                borderRadius: '0.4vw',
                                backgroundColor: 'rgba(0,0,100,1)',
                                border: ' 2px dotted white',
                            }}
                        >
                            <div className='col-md-4'>
                                <img
                                    style={{
                                        borderRadius: '0.4px',
                                        margin: '5px',
                                    }}
                                    src={comphodimg}
                                    className='img-fluid rounded-start'
                                    alt='...'
                                />
                            </div>
                            <div className='col-md-8'>
                                <div
                                    className='card-body'
                                    style={{ textAlign: 'left' }}
                                >
                                    <p
                                        className='card-text'
                                        style={{ color: 'white' }}
                                    >
                                        <table>
                                            <tr>
                                                {' '}
                                                Name of Faculty:<td> </td> Dr.
                                                S. U. Ghumbre
                                            </tr>
                                            <tr>
                                                Designation:<td></td> Professor,
                                                Head of Department
                                            </tr>
                                            <tr>
                                                E-mail ID:<td></td>{' '}
                                                shashi.ghumbre@gmail.com
                                            </tr>
                                            <tr>
                                                Contact No.:<td></td>{' '}
                                                02133-230414
                                            </tr>
                                        </table>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className='campus-visuals '
                        style={{
                            borderRadius: '0.4vw',
                            backgroundColor: 'rgba(0,0,100,1)',
                            border: ' 2px dotted white',
                        }}
                    >
                        <h3 style={{ color: 'white' }}>
                            VISUAL TOUR OF CE DEPARTMENT
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
