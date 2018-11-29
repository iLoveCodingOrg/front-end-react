import AsyncLoader from '../_common/AsyncLoader'
const AsyncPricing = AsyncLoader({
    loader: () => import('./components/PricingPage')
})

export {
    AsyncPricing
}