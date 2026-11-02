export const SITE_NAME = 'iLoveCoding'
export const SITE_URL = 'https://ilovecoding.org'
export const SITE_DESCRIPTION = 'Free, structured training to become a professional Front-End and Full-Stack JavaScript developer.'

// GA4 is only rendered when this is set (Netlify env var or .env)
export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID ?? ''

// Toggle the "ilovecoding.org vs ilovecoding.ai" chooser at the top of the home page
export const SHOW_PATH_DECISION_BANNER = false

export const SMS_OPTIN_URL = 'https://app.votel.ai/api/forms/public/VeHq/submit'
export const EASY_WEBINAR_WIDGET_JS = 'https://ewpcdn.easywebinar.com/widget/js/ewp_widget.js?v=1.23.24'
export const THUMB_URL = 'https://a.ilovecoding.org/thumb/'
export const ASSET_URL = 'https://a.ilovecoding.org/'
export const SUPPORT_EMAIL = 'support@ilovecoding.org'
export const LAST_MONTH_VIEWS = 7613

// Display order for course listings; anything missing goes to the end
export const COURSE_ORDER = ['perfect-path', 'htmlcss2', 'js2', 'git']

// Pages that are funnel/legal pages and should not show the "start learning" call-to-action
export const PAGES_WITHOUT_CTA = ['confirm', 'welcome', 'thank', 'verify', 'affiliate', 'terms', 'privacy', 'invite', 'email-me']

export const NAV_LINKS = [
  { label: 'Curriculum', href: '/curriculum' },
  { label: 'Courses', href: '/courses' },
  { label: 'Blog', href: '/blog' },
  { label: 'Reviews', href: '/reviews' },
]

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/pg/ilovecodingorg' },
  { label: 'Instagram', href: 'https://www.instagram.com/ilovecoding/' },
  { label: 'Twitter', href: 'https://twitter.com/ilovecodingorg' },
  { label: 'YouTube', href: 'https://www.youtube.com/c/ILoveCodingOrg' },
]
