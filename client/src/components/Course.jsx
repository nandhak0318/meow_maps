import React from 'react'
import Path from './Path'
import Bar from './Bar'
import { useState,useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import getMd from '../utils/getMd';
import '../assets/styles/post.scss'

import { useParams } from 'react-router-dom';

export default function Course() {
  const [content, setContent] = useState("");
  const {courseName} = useParams()
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
</main>
</div>
    </>
  )
}