import React from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import News from './News';
import Principalmsg from './Principalmsg';
import Studentscorner from './Studentscorner';
import Welcome from './Welcome';

export default function Movingcontent() {
    return (
        <>
            <div className='movingcontent'>
                <div className='flashnews'>
                    <marquee width='99%' direction='left' className='textblink'>
                        Flash news Gone here ....... Eg. Exam forms for odd
                        semister have been released, all Students can fill this
                        form and forward to DPU
                    </marquee>
                </div>
                <div className='homepage-content'>
                    <Carousel />
                    <Welcome />
                    <News />
                    <Studentscorner />
                    <Principalmsg />
                    <Footer />
                </div>
            </div>
        </>
    );
}
