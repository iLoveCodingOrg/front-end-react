import AsyncLoader from '../_common/AsyncLoader'
const AsyncReviewsPage = AsyncLoader({
    loader: () => import('./components/ReviewsPage')
})

export {
    AsyncReviewsPage
}