import React from 'react';
import Abouthod from './Abouthod';
import Deptnavbar from './department/Deptnavbar';
import Footer from './Footer';

import News from './News';

import Studentscorner from './Studentscorner';

export default function Deaprtment() {
    return (
        <><div className='stelthcontent'><Deptnavbar/></div>
            <div className='movingcontent'>
                <div className='flashnews'>
                    <h3>
                        <marquee width='70%' direction='left' style={{color:'blue'}}>
                            💻 Welcome to The Department of Computer Engineering
                            !! 💻
                        </marquee>
                    </h3>
                </div>
                <div className='welcome'>
                    <div
                        className='card'
                        style={{
                            border: '1px solid white',
                            backgroundImage:
                                'linear-gradient(to bottom ,moccasin,white)',
                        }}
                    >
                        <h1
                            className='card-header'
                            style={{
                                color: 'maroon',
                                textAlign: 'left',
                                borderRadius: '10px',
                            }}
                        >
                            Welcome
                        </h1>
                        <div
                            className='card-body'
                            style={{
                                backgroundColor: 'navajo',
                                borderRadius: '20px',
                            }}
                        >
                            <h5
                                className='card-title'
                                style={{
                                    color: '',
                                    textAlign: 'left',
                                    margin: '10px',
                                }}
                            >
                                <strong>
                                    The Computer Engineering department was
                                    established in year 2009 with the aim of
                                    providing quality education and excelling in
                                    all the endeavours it undertook.
                                </strong>{' '}
                                The Department has state-of-the-art
                                infrastructure and computing equipment supported
                                by high speed internet connection. Student
                                organizations (COMPSA and Gati-Tech) are dynamic
                                and organize a number of academic well as
                                extracurricular activities .The Department has a
                                pool of experienced, dedicated and committed
                                faculty members who aim at delivering top class
                                education to students. Highly skilled technical
                                laboratory assistant help us to keep all
                                laboratories updated with latest software.
                                Department organizes industry visits and expert
                                session on latest technologies to expose the
                                students to the rapid change in computer
                                engineering domain. Student of our department
                                have won prizes in various national and
                                international level paper presentation and
                                project exhibition.
                            </h5>
                           
                            <div>
                                <h6
                                    className='card-title'
                                    style={{
                                        textAlign: 'left',
                                        margin: '10px',
                                    }}
                                >
                                    We not only concentrate on imparting
                                    technical education but also focus to
                                    inculcate social and moral values in our
                                    students so as to make them responsible
                                    citizens of India. This is achieved by
                                    providing different platforms to the
                                    students through which they can bring out
                                    their talents and nourish themselves.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='homepage-content'>
                    <News />
                    <Studentscorner />
                    <Abouthod />
                    <Footer />
                </div>
            </div>
        </>
    );
}
