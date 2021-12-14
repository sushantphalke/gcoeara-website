import React from 'react';
import { Link } from 'react-router-dom';

export default function Branches() {
  return (<>
              
                <div className='branchmenu'>
                      <div className='branchmenu1'>
                      <Link to='/computerengineering'><div className='branch-name'><h5>Computer Engineering</h5></div></Link>
                      <div className='branch-name'><h5>Electronics & Telecommunication Engineering</h5></div>
                      <div className='branch-name'><h5>Automobile Engineering</h5></div>
                      </div>
                      <div className='branchmenu2'>
                      <div className='branch-name'><h5>Civil Engineering</h5></div>
                      <div className='branch-name'><h5>Instrumentation & Control Engineering</h5></div>
                      <div className='branch-name'><h5>Mechanical Engineering</h5></div>
                      </div> 
                       </div>
                       
                      </>
  )
}
