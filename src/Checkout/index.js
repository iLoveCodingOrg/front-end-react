import * as actions from './actions'
import reducer from './reducer'
import Header from './components/Header'
import Footer from './components/Footer'
import UserForm from './components/UserForm'
import CreditCard from './components/CreditCard'
import WhatYouGet from './components/WhatYouGet'
import Due from './components/Due'

import AsyncLoader from '../_common/AsyncLoader'
const AsyncCheckout = AsyncLoader({
    loader: () => import('./components/Checkout')
})

export {
    reducer,
    actions,
    Header,
    Footer,
    UserForm,
    CreditCard,
    WhatYouGet,
    Due,
    AsyncCheckout
}