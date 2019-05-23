import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../Loading'

export default opts => Loadable({
  loading: () => <Loading />,
  ...opts,
})
