import React from 'react';
import student1 from '../images/student1.png';
import aluminiphoto from '../images/alumini-photo1.png';
import complaintlogo from "../images/complaint_new.jpg"

export default function Studentscorner() {
    return (
        <><hr />
            
            <div style={{display:"flex",margin:'auto',textAlign:"center",justifyContent:"center",border: '1px solid white',
                        backgroundImage:
                            'linear-gradient(to bottom ,rgba(255, 228, 181, 0.842),rgba(255, 255, 255, 0.842))',
                        borderRadius: '0.8vw'}}>
            <div className='onhovereffect' style={{border:"1px dashed grey" , borderRadius:"10px",margin:"10px"}}>
                
            <h1 style={{ margin: '20px', color: 'maroon' }}>
                Students & Aluminis
            </h1>
            <div className='studentscorner'>
                <div className='std-corner-options'>
                    <div className='footer-logoline'>
                        <img
                            src={student1}
                            alt='student1'
                            style={{ height: '13vh' }}
                        />
                        <p>Students</p>
                    </div>
                </div>
                <div className='std-corner-options'>
                    <div className='footer-logoline'>
                        <img
                            src={aluminiphoto}
                            alt='alumini-photos'
                            style={{ height: '13vh' }}
                        />
                        <p>Alumini</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='onhovereffect' style={{border:"1px dashed grey" , borderRadius:"10px",margin:"10px"}}>
            <h1 style={{ margin: '20px', color: 'maroon' }}>
            Grievance Redressal System
            </h1>
            <div className='studentscorner'>
                <div className='std-corner-options'>
                    <div className='footer-logoline'>
                        <img
                            src={complaintlogo}
                            alt='student1'
                            style={{ height: '13vh' }}
                        />
                        <p> Grievance</p>
                    </div>
                </div>
                
                </div>
            </div>
           
            </div>
        </>
    );
}
