import React from 'react'
import { useEffect,useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import Parser from '../utils/parser'
import '../assets/styles/bar.scss'


const LessonCard = ({data,show})=>{
  if(!show){
    return (
     <h1 className='arrow'>{`>`}</h1>
    )
  }
  return (
    <>
    {data.chapters.map((c,index)=>{
      return (
        <section key={index}>
          <h1>{c.tittle}</h1>
          <ul>
              {c.lessons.map((e,i)=>{
                return <Link to={`/course/${data.code}/chapter/${c.tittle}/lesson/${e.tittle}`} key={i}>
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
  const [show,setShow] = useState(false)
const [isLoading, setIsLoading] = useState(true)
const [data,setData] = useState([])
const {courseName} = useParams()
const handler = ()=>{
  if(!show){
    setShow(!show)
  }
}
const loadData = ()=>{
  const data = Parser(courseName)
  setData(data)
}
const closer = ()=>{
  setShow(false)
}
useEffect(() => {
loadData()
setIsLoading(false)
if(window.innerWidth > 800){
  setShow(true)
}
}, []);

return(
  <aside className={`sidebar ${show? 'show' : 'hide'}`} onClick={handler}>
    {!show? '':<p onClick={closer} className='close'>X</p>}
    {isLoading? <h1>loading...</h1>: <LessonCard data={data} show={show}/> }
  </aside>
)

}
