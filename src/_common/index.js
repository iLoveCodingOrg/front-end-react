import List from './List'
import Card from './Card'
import Add from './Add'
import View from './View'
import Edit from './Edit'
import ViewHeader from './ViewHeader'
import Access from './Access'
import Level from './Level'
import Duration from './Duration'
import LessonCount from './LessonCount'
import RedirectAlert from './RedirectAlert'
import CheckMark from './CheckMark'

import AsyncLoader from './AsyncLoader'

const EditForm = AsyncLoader({
  loader: () => import('./EditForm'),
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
  EditForm,
}
