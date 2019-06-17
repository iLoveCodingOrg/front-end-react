import reducer from './reducer'

import AsyncLoader from '../_common/AsyncLoader'

const AsyncCheckout = AsyncLoader({
  loader: () => import('./components/Checkout'),
})

export default AsyncCheckout
export { reducer }
