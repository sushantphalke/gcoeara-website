import React from 'react';
import Quicklinks from './Quicklinks';

export default function Welcome() {
    return (
        <div className='welcome'>
            <div className='card' style={{border:'1px solid white',backgroundImage: "linear-gradient(to bottom ,rgba(255, 228, 181, 0.742),rgba(255, 255, 255, 0.442))"}}>
                <h1 className='card-header' style={{color:'maroon',textAlign:'left',borderRadius:"10px"}}>Welcome</h1>
                <div className='card-body' style={{backgroundColor:'navajo', borderRadius:'20px'}}>
                    <h5 className='card-title' style={{color:'' , textAlign:'left',margin:'10px'}}>
                        <strong>The Government College of Engineering & Research, Avasari
                        Khurd,</strong> established in June 2009, by Government of
                        Maharashtra, with an aim to spread technical education
                        in the rural parts of Maharashtra in order to produce
                        technically strong manpower by providing world class
                        facilities and state-of-the-art infrastructure.
                    </h5>
                    <h2 style={{textAlign:'left',margin:'5px'}}> At Present College Offers Six Degree Courses:</h2>
                    <div className='welcome-departments'>
                      <div className='welcome-departments-left' >
                      <div className='wlc-dept-name'><h5>Computer Engineering</h5></div>
                      <div className='wlc-dept-name'><h5>Electronics & Telecommunication Engineering</h5></div>
                      <div className='wlc-dept-name'><h5>Automobile Engineering</h5></div></div>
                      <div className='welcome-departments-right'>
                      <div className='wlc-dept-name'><h5>Civil Engineering</h5></div>
                      <div className='wlc-dept-name'><h5>Instrumentation & Control Engineering</h5></div>
                      <div className='wlc-dept-name'><h5>Mechanical Engineering</h5></div></div>

                    </div>
                    <div>
                    <h6 className='card-title' style={{textAlign:'left',margin:'10px'}}>
                        We not only concentrate on imparting technical education
                        but also focus to inculcate social and moral values in
                        our students so as to make them responsible citizens of
                        India. This is achieved by providing different platforms
                        to the students through which they can bring out their
                        talents and nourish themselves.
                    </h6></div>
            <Quicklinks/>
                </div>
            </div>
        </div>
    );
}
