import React from 'react'
import { useEffect,useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import Parser from '../utils/parser'
import '../assets/styles/bar.scss'


const LessonCard = ({data})=>{
  return (
    <>
    {data.chapters.map((c)=>{
      return (
        <section>
          <h1>{c.tittle}</h1>
          <ul>
              {c.lessons.map((e)=>{
                return <Link to={`/course/${data.code}/chapter/${c.tittle}/lesson/${e.tittle}`}>
                  {/* <img src="/video.png" alt="icon" /> */}
                <li><p>{e.tittle} </p></li></Link>
              })}
          </ul>
        </section>
      )
    })}
    </>
  )
}

export default function Bar(){
const [isLoading, setIsLoading] = useState(true)
const [data,setData] = useState([])
const {courseName} = useParams()
const loadData = ()=>{
  
  const data = Parser(courseName)
  setData(data)
}
useEffect(() => {
loadData()
setIsLoading(false)
}, []);

return(
  <aside className='sidebar'>
    {isLoading? <h1>loading...</h1>: <LessonCard data={data}/>}
  </aside>
)
}
