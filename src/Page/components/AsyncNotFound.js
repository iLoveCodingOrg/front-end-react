import AsyncLoader from '../../_common/AsyncLoader'

export default AsyncLoader({
  loader: () => import('./NotFound'),
})
