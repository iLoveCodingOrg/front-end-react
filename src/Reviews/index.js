import data from './components/data'
import PrintReviews from './components/PrintReviews'
import Reviews from './components/Reviews'

import AsyncLoader from '../_common/AsyncLoader'
const AsyncReviewsPage = AsyncLoader({
    loader: () => import('./components/ReviewsPage')
})

export {
    data,
    PrintReviews,
    Reviews,
    AsyncReviewsPage
}