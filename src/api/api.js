import axios from 'axios'
import { startLoading, stopLoading } from '../actions/utils';
import store from '../store'

const TOKEN_KEY = 'JWT_TOKEN_KEY'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000
})

export function authorize(token) {
    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`
        localStorage.setItem(TOKEN_KEY, token)
    }
}

authorize(localStorage.getItem(TOKEN_KEY))

export function unauthorize(token) {
    delete api.defaults.headers.Authorization
    localStorage.removeItem(TOKEN_KEY)
}

export async function getMe() {
    try {
        const { data } = await api.get('/me')
        return data
    } catch (err) {
        throw err
    }
}

api.interceptors.request.use(config => {
    store.dispatch(startLoading())
    return config
})

api.interceptors.response.use(resp => {
    store.dispatch(stopLoading())
    return resp
},
err => {
    store.dispatch(stopLoading())
    return Promise.reject(err)
})

export default api
//Normally this file is copy btw projects because this is used on that way always