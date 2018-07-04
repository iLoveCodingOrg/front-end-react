import { isNil } from 'lodash'
import qs from 'query-string'
import { getTimeDifference } from 'react-countdown-now'

import * as actions from './actions'
import reducer from './reducer'
import Offer from './components/Offer'
import Timer from './components/Timer'
import IsOfferValid from './components/IsOfferValid'

function isOfferValid(location){
    const query = qs.parse(location.search)
    const timeNow = parseInt(query.t)
    const timeLeft = query.l ? parseInt(query.l) : undefined

    if (isNil(timeLeft)) return false
    return !getTimeDifference(timeNow + timeLeft).completed
}

export {
    actions,
    reducer,
    Offer,
    Timer,
    IsOfferValid,
    isOfferValid
}