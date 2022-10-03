import React from 'react'
import Path from './Path'
import Bar from './Bar'
import { useState,useEffect } from 'react';
import Button from './Button';
import ReactMarkdown from "react-markdown";
import getMd from '../utils/getMd';
import '../assets/styles/post.scss'
import { getFirstLesson } from '../utils/getLesson';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Course() {
  const [content, setContent] = useState("");
  let link;
  const {courseName} = useParams()
  const {tittle,lesson} = getFirstLesson(courseName)
    link = `chapter/${tittle}/lesson/${lesson.tittle}`
   useEffect(() => {
    const md = getMd(courseName)
    fetch(`/md/${md}`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <>
<div className="withbar">
<Bar/>
<main className="mainc">
<Path/>
<div className="post">
      <ReactMarkdown className='shet' children={content} />
    </div>
    <Link to={link}><Button primaryText={'Start Course'} innerText={'GO!'}/></Link>
</main>
</div>
    </>
  )
}