import AsyncLoader from '../_common/AsyncLoader'

const AsyncCurriculum = AsyncLoader({
  loader: () => import('./components/Curriculum'),
})

export default AsyncCurriculum
