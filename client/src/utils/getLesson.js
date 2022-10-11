import courses from '../assets/maps/index'

const getFirstLesson = (course) => {
  const data = courses.find(x => x.code == course)
  if (data?.['chapters']?.[0]?.['lessons']?.[0]) {
    return { lesson: data['chapters'][0]['lessons'][0], tittle: data['chapters'][0].tittle }
  }
}

const getCurrentLesson = (course, currentLesson) => {
  const data = courses.find(x => x.code == course)
  let chapt = {
  }
  for (let i = 0; i < data.chapters.length; i++) {
    for (let j = 0; j < data.chapters[i].lessons.length; j++) {
      if (currentLesson == data.chapters[i].lessons[j].tittle) {
        chapt = {
          ...data.chapters[i].lessons[j]
        }
        return chapt
      }
    }
  }
  return chapt
}


const getPreviousLesson = (course, currentLesson) => {
  const data = courses.find(x => x.code == course)
  let prevChapt = { chapterName: '', lessonName: '' }
  for (let i = 0; i < data.chapters.length; i++) {
    for (let j = 0; j < data.chapters[i].lessons.length; j++) {
      if (currentLesson == data.chapters[i].lessons[j].tittle) {
        if (i == 0 && j == 0) {
          return prevChapt
        }
        if (j == 0) {
          const lastLesson = data.chapters[i - 1].lessons.length - 1
          prevChapt.lessonName = data.chapters[i - 1].lessons[lastLesson].tittle
          prevChapt.chapterName = data.chapters[i - 1].tittle
        } else {
          prevChapt.lessonName = data.chapters[i].lessons[j - 1].tittle
          prevChapt.chapterName = data.chapters[i].tittle
        }
      }
    }
  }
  return prevChapt

}




const getNextLesson = (course, currentLesson) => {
  const data = courses.find(x => x.code == course)
  let nextChap = {
    chapterName: '',
    lessonName: ''
  }
  const finalChap = data.chapters.length - 1
  const finalLesson = data.chapters[finalChap].lessons.length - 1
  for (let i = 0; i < data.chapters.length; i++) {
    for (let j = 0; j < data.chapters[i].lessons.length; j++) {
      if (currentLesson == data.chapters[i].lessons[j].tittle) {
        if (i == finalChap && j == finalLesson) {
          return nextChap
        }
        const theEnd = data.chapters[i].lessons.length - 1;
        if (j == theEnd) {
          nextChap.lessonName = data.chapters[i + 1].lessons[0].tittle
          nextChap.chapterName = data.chapters[i + 1].tittle
          return nextChap
        } else {
          nextChap.lessonName = data.chapters[i].lessons[j + 1].tittle
          nextChap.chapterName = data.chapters[i].tittle
          return nextChap
        }
      }
    }
  }
}

export {
  getFirstLesson,
  getCurrentLesson,
  getPreviousLesson,
  getNextLesson
}