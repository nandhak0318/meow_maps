import React from 'react'
import {  useNavigate } from 'react-router-dom'
import '../assets/styles/nav.scss'
export default function Nav() {
  const redirect = useNavigate()
  const home = ()=>{
    redirect('/')
  }
  return (
    <nav className='nav'>
      <div className="nav_wrap">
      <h1 onClick={home} style={{'cursor':'pointer'}}>Meow</h1>
      </div>
    </nav>
  )
}
