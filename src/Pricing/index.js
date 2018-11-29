import Price from './components/Price'
import PriceBox from './components/PriceBox'
import Header from './components/Header'
import Switch from './components/Switch'
import Guarantee from './components/Guarantee'
import FAQs from './components/FAQs'
import PrintFAQ from './components/PrintFAQ'
import WhatsIncluded from './components/WhatsIncluded'
import WhosItFor from './components/WhosItFor'
import WhosItNotFor from './components/WhosItNotFor'
import Outcomes from './components/Outcomes'
import ProDetails from './components/ProDetails'
import PlusDetails from './components/PlusDetails'
import PremiumDetails from './components/PremiumDetails'

import AsyncLoader from '../_common/AsyncLoader'
const AsyncPricing = AsyncLoader({
    loader: () => import('./components/PricingPage')
})

export {
    AsyncPricing,
    Price,
    PriceBox,
    Header,
    Switch,
    Guarantee,
    FAQs,
    PrintFAQ,
    WhatsIncluded,
    WhosItFor,
    WhosItNotFor,
    Outcomes,
    ProDetails,
    PlusDetails,
    PremiumDetails
}