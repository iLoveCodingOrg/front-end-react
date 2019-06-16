export default function logError(error, errorInfo) {
  Raven.captureException(error, { extra: errorInfo })
}
