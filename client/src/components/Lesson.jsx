import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Bar from './Bar';
import Path from './Path';
import { useNavigate } from 'react-router-dom';
import {getCurrentLesson,getNextLesson,getPreviousLesson} from '../utils/getLesson'
import ReactMarkdown from "react-markdown";
import Button from './Button';
import '../assets/styles/lesson.scss'
import '../assets/styles/post.scss'



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

const Video = ({id,list})=>{
  const {lessonName,courseName} = useParams()
  let Temp = "https://www.youtube.com/embed/"
  if(list){
Temp = "https://www.youtube.com/embed/videoseries?list="
  }
  return <div 
  
  className="hs-responsive-embed-youtube"><iframe src={`${Temp}${id}`} frameBorder="0"  allowFullScreen=""></iframe>

  <Buttons extraClass={'inVideo'} courseName={courseName} lessonName={lessonName}/>
  </div>
}

const Links = ({links})=>{
  return <ul className='links'>
    {links.map((e)=>{
      return <li className='linkItem'><a href={e.link} target="_blank">{e.tittle}</a></li>
    })}
  </ul>
}
const Post = ({content})=>{
  return (
    <div className="post">
      <ReactMarkdown className='shet' children={content} />
    </div>)
}

const Lesson = () => {
  const [lesson, setLesson] = useState({})
  const {lessonName,courseName} = useParams()
  const [content, setContent] = useState("");

useEffect(() => {
  const currentLesson = getCurrentLesson(courseName,lessonName)
  setLesson(()=>currentLesson)
  return ()=>{

  }
}, [lessonName,courseName]);
useEffect(()=>{
  if(lesson&&lesson.type=="md"){
    const md = lesson.md
        fetch(`/md/${md}`)
          .then((res) => res.text())
          .then((text) => setContent(text));
  }
    },[lesson])
  
  return (
      <>
<div className="withbar">
<Bar/>
<main className="mainc">
<Path/>
<h1 style={{'color':'white','fontSize':'1.4em'}}>{lessonName}</h1>
<div className="content">
  {!lesson?<h4>loading..</h4>:''}
  {lesson && lesson.type ==='video' ? <Video list={lesson.list} id={lesson.link}/>: '' }
   {lesson&&lesson.type=='links'? <Links links={lesson.links}/>:''}
   {lesson&&lesson.type=='md'?<Post content={content}/>: ''}
   {lesson&&lesson.type!=='video'?<Buttons/> : ''}
</div>
</main>
</div>
    </>
  );
}

export default Lesson;
