import courses from '../assets/maps/index'

const Parser = (course,c,l)=>{
  const data = courses.find(x=>x.code==course)
  if(!c) return data
  const chapter = data.chapters.find(x=>x.tittle==c)
  if(!l) return chapter
  const lesson = chapter.lessons.find(x=>x.tittle=l)
  return lesson
}

export default Parser