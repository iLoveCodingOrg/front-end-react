import { appendFile, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

const coursesPath = fileURLToPath(new URL('./src/data/courses.json', import.meta.url))

// The old SPA served every lesson at /lessons/:slug as well as inside its course.
// Point those legacy URLs at the canonical course-lesson page.
function lessonRedirects() {
  return {
    name: 'ilc:lesson-redirects',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const courses = JSON.parse(await readFile(coursesPath, 'utf8'))
        const seen = new Set()
        const lines = ['', '# GENERATED: /lessons/:slug > /courses/:course/lessons/:slug']
        for (const course of courses) {
          for (const lesson of course.lesson) {
            if (seen.has(lesson.slug)) continue
            seen.add(lesson.slug)
            lines.push(`/lessons/${lesson.slug}  /courses/${course.slug}/lessons/${lesson.slug}  301`)
          }
        }
        lines.push('', '# Anything else under retired sections', '/lessons/*  /courses  301', '/courses/*  /courses  301', '')
        await appendFile(new URL('_redirects', dir), lines.join('\n'))
      },
    },
  }
}

export default defineConfig({
  site: 'https://ilovecoding.org',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      filter: page => !/\/pages\/(thanks|thankyou|confirm|confirmed|welcome|verify|invite|email-me)/.test(page)
        && !page.includes('/webinar/'),
    }),
    lessonRedirects(),
  ],
})
