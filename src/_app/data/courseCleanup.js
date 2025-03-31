const fs = require('fs')
const path = require('path')

// File paths
const newCourseFilePath = path.join(__dirname, './newCourse.json')
const courseFilePath = path.join(__dirname, '../_app/data/Course.json')
const lessonFilePath = path.join(__dirname, '../_app/data/Lesson.json')

// Read and parse JSON files
const courses = JSON.parse(fs.readFileSync(courseFilePath, 'utf8'))
const lessons = JSON.parse(fs.readFileSync(lessonFilePath, 'utf8'))

// Create a map of lessons by their IDs for quick lookup
const lessonMap = new Map()
lessons.forEach((lesson) => {
  if (lesson._id) {
    lessonMap.set(lesson._id, lesson)
  }
})

// Replace lesson IDs with lesson objects in courses
courses.forEach((course) => {
  if (Array.isArray(course.lesson)) {
    course.lesson = course.lesson.map(lessonId => lessonMap.get(lessonId) || lessonId)
  }
})

// Write the updated courses back to the file
fs.writeFileSync(newCourseFilePath, JSON.stringify(courses, null, 2), 'utf8')
