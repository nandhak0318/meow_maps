import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/styles/card.scss'

export default function CourseItem({thumbnail,tittle,code}) {
  // const style = {
  //   backgroundImage: 'url(images/'+thumbnail+')'
  // } 
  return (
    <Link to={`course/${code}`}>
    <section >
      <div className="container">
      <div className="card" >
        <div className="title">
      <h2 >{tittle}</h2>
    </div>
  <div className="circle"></div>
  </div>
</div>
    </section>
    </Link>
  )
}
