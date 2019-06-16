import List from './List'
import Card from './Card'
import View from './View'
import ViewHeader from './ViewHeader'
import Access from './Access'
import Level from './Level'
import Duration from './Duration'
import LessonCount from './LessonCount'
import RedirectAlert from './RedirectAlert'
import CheckMark from './CheckMark'

import AsyncLoader from './AsyncLoader'

const Add = AsyncLoader({
  loader: () => import('./Add'),
})

const Edit = AsyncLoader({
  loader: () => import('./Edit'),
})

export {
  List,
  Card,
  Add,
  View,
  Edit,
  ViewHeader,
  Access,
  Level,
  Duration,
  LessonCount,
  RedirectAlert,
  CheckMark,
}
