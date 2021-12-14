import React from 'react';

export default function Quicklinks() {
    return (
        <><hr/>
            <div className='card' style={{backgroundColor:'rgb(255, 234, 230,0.7)'}}>
                <div className='card-header' style={{border:'1px solid white',borderRadius:"10px"}}>
                    <h1 style={{color:'maroon',textAlign:'left',borderRadius:"10px"}}>
                        Quick Links
                    </h1>
                </div>
                <div className='card-body'>
                        <div className='quicklinks-left'>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    🔰About Institute JDTE
                                </li>
                                <li className='list-group-item'>
                                    🔰Vision & Mission of the Institute
                                </li>
                                <li className='list-group-item'>🔰Contact Us</li>
                                <li className='list-group-item'>
                                    🔰DTE, Maharashtra
                                </li>
                                <li className='list-group-item'>
                                    🔰Govt. of Maharashtra
                                </li>
                                <li className='list-group-item'>
                                    🔰S. P. Pune University
                                </li>
                                <li className='list-group-item'>
                                    🔰Prevention of Ragging
                                </li>
                                <li className='list-group-item'>
                                    🔰All Committes and Cells at Institute Level
                                </li>
                            </ul>
                        </div>
                        <div className='quicklinks-right'>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    🔰Student Notices
                                </li>
                                <li className='list-group-item'>
                                    🔰Grievances Redressal
                                </li>
                                <li className='list-group-item'>
                                    🔰Interal Circulars, Minutes of Meeting &
                                    Orders
                                </li>
                                <li className='list-group-item'>
                                    🔰College Approval Details
                                </li>
                                <li className='list-group-item'>
                                    🔰Educational Verification
                                </li>
                                <li className='list-group-item'>
                                    🔰College Magzines
                                </li>
                                <li className='list-group-item'>
                                    🔰NIRF Information
                                </li>
                                <li className='list-group-item'>
                                    🔰Screen Reader Access
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
        </>
    );
}
