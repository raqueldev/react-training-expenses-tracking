import api, { authorize, unauthorize } from './api'

export async function login(request) {
    const { data } = await api.post('/login', request)
    authorize(data.token)
    return data.user
}

export async function register(request) {
    const { data } = await api.post('/register', request)
    authorize(data.token)
    return data.user
}

export function logout() {
    unauthorize()
}

export async function getMe() {
    try {
        const { data } = await api.get('/me')
        return data
    } catch (err) {
        unauthorize()
        throw err
    }
}