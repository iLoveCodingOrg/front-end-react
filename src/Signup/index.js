import AsyncLoader from '../_common/AsyncLoader'

const AsyncSignup = AsyncLoader({
  loader: () => import('./components/Signup'),
})

export {
  AsyncSignup,
}
