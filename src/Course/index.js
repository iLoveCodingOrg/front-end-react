import * as actions from './actions'
import reducer from './reducer'
import Add from './components/Add'
import View from './components/View'
import Edit from './components/Edit'
import List from './components/List'
import CourseNav from './components/CourseNav'
import CourseLessonView from './components/CourseLessonView'

import AsyncLoader from '../_common/AsyncLoader'
const AsyncRoutes = AsyncLoader({
    loader: () => import('./components/Routes')
})

export {
    reducer,
    actions,
    Add,
    View,
    Edit,
    List,
    CourseNav,
    CourseLessonView,
    AsyncRoutes
}