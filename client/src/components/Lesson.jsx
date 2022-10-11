import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Bar from './Bar';
import Path from './Path';
import { useNavigate } from 'react-router-dom';
import {getCurrentLesson,getNextLesson,getPreviousLesson} from '../utils/getLesson'
import Button from './Button';
import '../assets/styles/lesson.scss'



const Buttons = ({extraClass})=>{
  const {lessonName,courseName} = useParams()
  const redirect = useNavigate()
const redirector =  (ln,ch)=>{
      redirect(`/course/${courseName}/chapter/${ch}/lesson/${ln}`)
  }
  const prevHandler = ()=>{
    const prev = getPreviousLesson(courseName,lessonName)
    if(prev.chapterName != '' && prev.lessonName!= ''){
      redirector(prev.lessonName,prev.chapterName)
    }
  }
  const nextHandler = ()=>{
    const  next = getNextLesson(courseName,lessonName)
    if(next.chapterName != '' && next.lessonName !=''){
      redirector(next.lessonName,next.chapterName)

    }
  }

  return <div className={`btn-cvr ${extraClass}`}>
  <Button handler={prevHandler}   primaryText={'PREV'} innerText={'GO!'}/>
  <Button handler={nextHandler}primaryText={'Next'} innerText={'GO!'}/>
</div>
}

const Video = ({id})=>{
  const {lessonName,courseName} = useParams()

  return <div className="hs-responsive-embed-youtube"><iframe src={`https://www.youtube.com/embed/${id}?rel=0&amp;showinfo=0`} frameBorder="0"  allowFullScreen=""></iframe>
  <Buttons extraClass={'inVideo'} courseName={courseName} lessonName={lessonName}/>
  </div>
}

const Links = ({links})=>{
  return <ul className='links'>
    {links.map((e)=>{
      return <li className='linkItem'><a href={e.link}>e.tittle</a></li>
    })}
  </ul>
}

const Lesson = () => {
  const [lesson, setLesson] = useState({})
  const {lessonName,courseName} = useParams()

useEffect(() => {
  const currentLesson = getCurrentLesson(courseName,lessonName)
  setLesson(()=>currentLesson)
  console.log('ahpe')
  return ()=>{

  }
}, [lessonName,courseName]);

  return (
      <>
<div className="withbar">
<Bar/>
<main className="mainc">
<Path/>
<h1 style={{'color':'white'}}>{lessonName}</h1>
<div className="content">
  {!lesson?<h4>loading..</h4>:''}
  {lesson && lesson.type ==='video' ? <Video id={lesson.link}/>: '' }
</div>
   {lesson&&lesson.type!=='video'?<Buttons/> : ''}
</main>
</div>
    </>
  );
}

export default Lesson;
