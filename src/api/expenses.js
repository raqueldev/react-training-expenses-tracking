import api from './api'

export async function getExpenses(params) {
    const { data } = await api.get('/expenses', { params })
    return data //getting an object of paginated data
}