import React from 'react'
import Header from './Header'
import Homeflashnews from './Homeflashnews'
import Homenav from './Homenav'

export default function Homepage() {
  return (
    <div className='homepage' >
      <Header/>
      <Homenav/>
      <Homeflashnews/>
      
    </div>
  )
}
