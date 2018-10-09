
import * as userApi from '../api/user';

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function login(request) {
    return async dispatch => {
        const user = await userApi.login(request)
        dispatch({type: LOGIN, user})
    }
}
export function logout(request) {
    return async dispatch => {
        const user = await userApi.logout(request)
        dispatch({type: LOGOUT, user})
    }
}
export function register(request) {
    return async dispatch => {
        const user = await userApi.register(request)
        dispatch({type: LOGIN, user})
    }
}
export function getMe() {
    return async dispatch => {
        const user = await userApi.getMe()
        dispatch({type: LOGIN, user})
    }
}
