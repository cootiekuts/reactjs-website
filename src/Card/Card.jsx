import React from 'react'
import profilePic from './index.png'

export default function Card() {
  return (
    <div classname='main-container'>

    <span className='card'>
       <img className='card-image' src={profilePic} alt='profile picture'></img>
       <h2 className='card-title'>Kuti</h2>
       <p classname='card-text'>I write program for fun</p>
    </span>
    </div> 
  )
}
