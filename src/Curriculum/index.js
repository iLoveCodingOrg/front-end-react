import Module1 from './components/Module1'
import Module2 from './components/Module2'
import Module3 from './components/Module3'
import Module4 from './components/Module4'
import Electives from './components/Electives'
import PrintTraining from './components/PrintTraining'

import AsyncLoader from '../_common/AsyncLoader'
const AsyncCurriculum = AsyncLoader({
    loader: () => import('./components/Curriculum')
})

export {
    AsyncCurriculum,
    Module1,
    Module2,
    Module3,
    Module4,
    Electives,
    PrintTraining
}