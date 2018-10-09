import { START_LOADING, STOP_LOADING } from '../actions/utils'

export function isLoading(state = false, { type }) {
    switch(type) {
        case START_LOADING:
            return true
        case STOP_LOADING:
            return false
        default:
            return state
    }
}