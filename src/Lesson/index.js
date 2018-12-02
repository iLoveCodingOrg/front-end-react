import * as actions from './actions'
import reducer from './reducer'

import AsyncLoader from '../_common/AsyncLoader'
const AsyncRoutes = AsyncLoader({
    loader: () => import('./components/Routes')
})

export {
    reducer,
    actions,
    AsyncRoutes
}