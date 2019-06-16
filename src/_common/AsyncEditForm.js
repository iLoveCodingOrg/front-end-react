import AsyncLoader from './AsyncLoader'

export default AsyncLoader({
  loader: () => import('./EditForm'),
})
