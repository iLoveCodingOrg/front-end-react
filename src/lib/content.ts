import blogsData from '../data/blogs.json'
import coursesData from '../data/courses.json'
import pagesData from '../data/pages.json'
import { COURSE_ORDER } from '../config'
import { stripDeadEmbeds } from './video'

type MongoDate = { $date: string } | string | number | undefined

export interface Lesson {
  slug: string
  title: string
  subTitle?: string
  videoSource?: string
  duration?: string
  level?: number
  bodyContent?: string
  sourceUrl?: string
  demoUrl?: string
  thumbnail?: string
}

export interface Course extends Omit<Lesson, 'duration'> {
  courseTotalDuration?: string
  topic?: string[]
  lesson: Lesson[]
}

export interface Post {
  slug: string
  title: string
  subTitle?: string
  bodyContent?: string
  date?: Date
  isListed: boolean
}

function toDate(value: MongoDate): Date | undefined {
  if (!value) return undefined
  const raw = typeof value === 'object' ? value.$date : value
  const date = new Date(raw)
  return Number.isNaN(date.getTime()) ? undefined : date
}

const orderOf = (slug: string) => {
  const i = COURSE_ORDER.indexOf(slug)
  return i === -1 ? Number.MAX_SAFE_INTEGER : i
}

export const courses: Course[] = (coursesData as Course[])
  .map(c => ({
    ...c,
    bodyContent: stripDeadEmbeds(c.bodyContent),
    lesson: c.lesson.map(l => ({ ...l, bodyContent: stripDeadEmbeds(l.bodyContent) })),
  }))
  .sort((a, b) => orderOf(a.slug) - orderOf(b.slug))

export const coreCourses = courses.filter(c => c.topic?.includes('Core Training'))

export const getCourse = (slug: string) => courses.find(c => c.slug === slug)

export const blogs: Post[] = blogsData
  .map(b => ({
    slug: b.slug,
    title: b.title,
    subTitle: b.subTitle,
    bodyContent: stripDeadEmbeds(b.bodyContent),
    date: toDate(b.createdIso as MongoDate),
    isListed: b.active !== false,
  }))
  .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0))

export const pages: Post[] = pagesData
  .filter(p => p.bodyContent)
  .map(p => ({
    slug: p.slug,
    title: p.title,
    subTitle: p.subTitle,
    bodyContent: stripDeadEmbeds(p.bodyContent),
    date: toDate(p.createdIso as MongoDate),
    isListed: false,
  }))

// Does an internal path resolve to a page this site actually builds?
const courseSlugs = new Set(courses.map(c => c.slug))
export function isLivePath(path: string) {
  const match = path.match(/^\/courses\/([^/]+)(?:\/lessons\/([^/]+))?$/)
  if (!match) return true
  const course = getCourse(match[1])
  if (!course || !courseSlugs.has(match[1])) return false
  return !match[2] || course.lesson.some(l => l.slug === match[2])
}

export const LEVELS = ['Beginner', 'Intermediate', 'Advanced']
export const levelLabel = (level?: number | string) => LEVELS[Number(level)] ?? ''

// "638:43" (minutes:seconds) -> "10h 39m"; "4:22" -> "4 min"
export function formatDuration(duration?: string) {
  if (!duration) return ''
  const [minutes, seconds = 0] = duration.split(':').map(Number)
  const total = Math.round(minutes + seconds / 60)
  if (total < 60) return `${Math.max(total, 1)} min`
  const h = Math.floor(total / 60)
  const m = total % 60
  return m ? `${h}h ${m}m` : `${h}h`
}

export const formatDate = (date?: Date) => (date
  ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  : '')

export function stripHtml(html = '') {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

// CMS bodies are often an empty "<p></p>"
export const hasContent = (html = '') => Boolean(stripHtml(html)) || /<(img|iframe|video|pre)\b/i.test(html)
