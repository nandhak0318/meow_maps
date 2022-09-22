
import '../assets/styles/App.scss'
import {Routes, Route,Link} from 'react-router-dom'
import Course from './Course'
import Lesson from './Lesson'
import Chapter from './Chapter'
import Home from './Home'
import Nav from './Nav'


function App() {
  return (
    <>
   <Nav/>
    <div className='page_wrap'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route/>
      <Route path="course/:courseName" element={<Course/>}/>
      <Route path="course/:courseName/chapter/:chapterName/lesson/:lessonName" element={<Lesson/>}/>
       <Route path="course/:courseName/chapter/:chapterName" element={<Chapter/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
