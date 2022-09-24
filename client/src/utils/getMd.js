import courses from '../assets/maps/index'

const getMd = (course) => {
  const data = courses.find(x => x.code == course)
  return data.md
}

export default getMd