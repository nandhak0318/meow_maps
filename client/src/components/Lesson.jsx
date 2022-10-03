import React from 'react';
import { useParams } from 'react-router-dom';
import Bar from './Bar';
import Path from './Path';
import { useNavigate } from 'react-router-dom';
import {getFirstLesson,getNextLesson,getPreviousLesson} from '../utils/getLesson'
import Button from './Button';
const Lesson = () => {
  const redirect = useNavigate()
  const {lessonName,courseName} = useParams()
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

  return (
      <>
<div className="withbar">
<Bar/>
<main className="mainc">
<Path/>
<h1 style={{'color':'white'}}>{lessonName}</h1>
<div className="content">

</div>
<div className="btn-cvr">
  <Button handler={prevHandler}   primaryText={'PREV'} innerText={'GO!'}/>
  <Button handler={nextHandler}primaryText={'Next'} innerText={'GO!'}/>
</div>
</main>
</div>
    </>
  );
}

export default Lesson;
