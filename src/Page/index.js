import * as actions from './actions'
import reducer from './reducer'
import Add from './components/Add'
import View from './components/View'
import Edit from './components/Edit'
import List from './components/List'

import AsyncLoader from '../_common/AsyncLoader'
const AsyncRoutes = AsyncLoader({
    loader: () => import('./components/Routes')
})
const AsyncNotFound = AsyncLoader({
    loader: () => import('./components/NotFound')
})

export {
    reducer,
    actions,
    Add,
    View,
    Edit,
    List,
    AsyncRoutes,
    AsyncNotFound
}