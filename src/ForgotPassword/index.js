import * as actions from './actions'
import AsyncLoader from '../_common/AsyncLoader'

const AsyncForgotPassword = AsyncLoader({
    loader: () => import('./components/ForgotPassword')
})
const AsyncResetPassword = AsyncLoader({
    loader: () => import('./components/ResetPassword')
})

export {
    actions,
    AsyncForgotPassword,
    AsyncResetPassword
}