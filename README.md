# iLoveCoding

Static [Astro](https://astro.build) site for ilovecoding.org, deployed on Netlify.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
npm run preview
```

## Content

All content is static JSON in `src/data/` (exported from the old CMS):

- `courses.json`: courses with their lessons → `/courses/:course` and `/courses/:course/lessons/:lesson`
- `blogs.json` → `/blog/:slug` (`active: false` posts are built but not listed)
- `pages.json` → `/pages/:slug`
- `reviews.js`: testimonials
- `curriculum.ts`: the `/curriculum` roadmap. Items that link to a course/lesson that no longer exists are shown as "Not currently available".

### Page slug naming convention

- `pages/thanks-xxx` when a user successfully signs up to an option
- `pages/confirmed-xxx` when a user confirms an email or an action
- `pages/welcome-xxx` when a user purchases successfully

## Redirects

`public/_redirects` (Netlify). At build time, `astro.config.mjs` appends one redirect per lesson from the
legacy `/lessons/:slug` URL to `/courses/:course/lessons/:slug`.

## Analytics

Google Analytics 4 is loaded only when `PUBLIC_GA_MEASUREMENT_ID` is set (see `.env.example`).
Set it in Netlify under Site configuration → Environment variables.
