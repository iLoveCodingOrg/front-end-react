import AsyncLoader from '../_common/AsyncLoader'
const AsyncComments = AsyncLoader({
    loader: () => import('./components/Comments')
})

export {
    AsyncComments
}
