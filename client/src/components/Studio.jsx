import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Bar from './Bar';
import Path from './Path';
import Course from './Course'
import Lesson from './Lesson'
import Chapter from './Chapter'

const Studio = () => {
  return (
    <div>
       <>
<div className="withbar">
<Bar/>
<main>
<Path/>

</main>
</div>
    </>
      <Routes>
      <Route path="course/:courseName" element={<Course/>}/>
      <Route path="course/:courseName/chapter/:chapterName/lesson/:lessonName" element={<Lesson/>}/>
       <Route path="course/:courseName/chapter/:chapterName" element={<Chapter/>}/>
      </Routes>
    </div>
  );
}

export default Studio;
