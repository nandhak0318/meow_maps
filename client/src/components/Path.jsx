import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../assets/styles/path.scss'
const func = ()=>{
    const {courseName,chapterName,lessonName} = useParams()
    return <div className='path'>
      <Link to={'/'}>
        <p style={{"color":"rgba(255, 255, 255, .87)"}}>{`Home>`}</p>
      </Link>
      {courseName?<Link to={`/course/${courseName}`}>
        <p style={{"color":"rgba(255, 255, 255, .87)"}}>{`Course>`}</p>
      </Link>: ''}
      {/* {chapterName ? <Link to={`/course/${courseName}/chapter/${chapterName}`}>
        <p style={{"color":"rgba(255, 255, 255, .87)"}}> {`Chapter>`}</p>
      </Link>: ''} */}
      
      {lessonName ? <Link to={`/course/${courseName}/chapter/${chapterName}/lesson/${lessonName}`}>
        <p style={{"color":"rgba(255, 255, 255, .87)"}}>{`Lesson>`}</p>
      </Link> : ''}
       
      </div>
    // if(courseName && chapterName && lessonName){
    //   return <>
    //   <Link to={'/'}>
    //     <p>Home</p>
    //   </Link>
    //   <Link to={`/course/${courseName}`}>
    //     <p style={{"color":"black"}}>{`Course>`}</p>
    //   </Link>
    //   <Link to={`/course/${courseName}/chapter/${chapterName}`}>
    //     <p>{`Chapter>`}</p>
    //   </Link>

    //    <Link to={`/course/${courseName}/chapter/${chapterName}/lesson/${lessonName}`}>
    //     <p>{`Lesson>`}</p>
    //   </Link>
    //   </>
    // }
    // if(courseName && chapterName){
    //   return <>
    //   <Link to={`course/${courseName}`}>
    //     <p style={{"color":"black"}}>{`Course>`}</p>
    //   </Link>
    //   <Link to={`course/${courseName}/chapter/${chapterName}`}>
    //     <p>{`Chapter>`}</p>
    //   </Link>
    //   </>
    // }
    // if(courseName){
    //   return <>
    //   <Link to={`/course/${courseName}`}>
    //     <p style={{"color":"black"}}>{`Course>`}</p>
    //   </Link>
    //   </>
    // }

  }
export default function Path() {
  return (
    <div>{func()}</div>
  )
}
