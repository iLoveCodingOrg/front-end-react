// Video sources in the data come in three shapes:
//   "pP5cQAPR6cY"                        -> YouTube id
//   "//player.vimeo.com/video/180691477" -> Vimeo URL
//   "311500783"                          -> bare Vimeo id
// Every Vimeo video on the account was removed (all ids 404 as of Nov 2026), so Vimeo sources resolve to null.
export const isVimeo = (source = '') => /vimeo\.com\//.test(source) || /^\d+$/.test(source)

export function videoEmbedUrl(source?: string) {
  if (!source || source === 'none' || isVimeo(source)) return null
  const youtube = source.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/) ?? source.match(/^([\w-]{11})$/)
  if (youtube) return `https://www.youtube-nocookie.com/embed/${youtube[1]}?rel=0&modestbranding=1`
  return null
}

// Drop embeds of removed Vimeo videos from CMS HTML
export const stripDeadEmbeds = (html = '') => html.replace(/<iframe[^>]*vimeo\.com[^>]*>\s*<\/iframe>/gi, '')
