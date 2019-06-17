import AsyncLoader from '../_common/AsyncLoader'

const AsyncOfficeHours = AsyncLoader({
  loader: () => import('./components/OfficeHours'),
})

export default AsyncOfficeHours
