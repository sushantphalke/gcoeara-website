import React from 'react';
import carouselimg1 from '../images/carouselimg1.jpg';
import carouselimg2 from '../images/carouselimg2.jpg';
import carouselimg3 from '../images/carouselimg3.jpg';

export default function Carousel() {
    return (
        <div
            className='container'
            style={{ margin: 'auto', padding: 'auto',}}
        >
            <div
                id='carouselExampleCaptions'
                className='carousel slide'
                data-bs-ride='carousel'
            >
                <div className='corouselcss'>
                    <div className='carousel-indicators'>
                        <button
                            type='button'
                            data-bs-target='#carouselExampleCaptions'
                            data-bs-slide-to='0'
                            className='active'
                            aria-current='true'
                            aria-label='Slide 1'
                        ></button>
                        <button
                            type='button'
                            data-bs-target='#carouselExampleCaptions'
                            data-bs-slide-to='1'
                            aria-label='Slide 2'
                        ></button>
                        <button
                            type='button'
                            data-bs-target='#carouselExampleCaptions'
                            data-bs-slide-to='2'
                            aria-label='Slide 3'
                        ></button>
                    </div>
                    <div className='carousel-inner'>
                        <div className='carousel-item active'>
                            <img
                                src={carouselimg1}
                                className='d-block w-100'
                                alt='...'
                            />
                            <div className='carousel-caption d-none d-md-block'>
                                <h5>College cultural Programmes</h5>
                                <p>About subject of this programme</p>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <img
                                src={carouselimg2}
                                className='d-block w-100 '
                                alt='...'
                            />
                            <div className='carousel-caption d-none d-md-block'>
                                <h5>Degree Programme </h5>
                                <p>About subject of this event</p>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <img
                                src={carouselimg3}
                                className='d-block w-100'
                                alt='...'
                            />
                            <div className='carousel-caption d-none d-md-block'>
                                <h5>Robocon event Success</h5>
                                <p>
                                    All INDIA Rank 4 by Robotics reasearch lab
                                    students
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        className='carousel-control-prev'
                        type='button'
                        data-bs-target='#carouselExampleCaptions'
                        data-bs-slide='prev'
                    >
                        <span
                            className='carousel-control-prev-icon'
                            aria-hidden='true'
                        ></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button
                        className='carousel-control-next'
                        type='button'
                        data-bs-target='#carouselExampleCaptions'
                        data-bs-slide='next'
                    >
                        <span
                            className='carousel-control-next-icon'
                            aria-hidden='true'
                        ></span>
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
