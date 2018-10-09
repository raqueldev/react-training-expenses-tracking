import { LOGIN, LOGOUT } from '../actions/user';


export default function user(state = null, { type }) {
    switch(type) {
        case LOGIN:
            return user
        case LOGOUT:
            return null
        default:
            return state
    }
}