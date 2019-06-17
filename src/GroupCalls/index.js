import AsyncLoader from '../_common/AsyncLoader'

const AsyncGroupCalls = AsyncLoader({
  loader: () => import('./components/GroupCalls'),
})

export default AsyncGroupCalls
