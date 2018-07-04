import { isNil } from 'lodash'
import qs from 'query-string'
import { getTimeDifference } from 'react-countdown-now'

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
    Timer,
    IsOfferValid,
    isOfferValid
}