import React from 'react';
import { useEffect } from 'react';
import maps from '../assets/maps/index'
import CourseItem from './CourseItem';
import '../assets/styles/home.scss'

function Home(){
  useEffect(() => {
    console.log(maps)
  }, []);
  return <main>
 {maps.map((e,index)=><CourseItem key={index} tittle={e.tittle} code={e.code} />)}
  </main>
 
}

export default Home;
