import { GET_EXPENSES } from '../actions/expenses'

export function expenses(state = [], { type, expenses }) {
    switch(type) {
        case GET_EXPENSES:
            return expenses
        default:
            return state
    }
}


export function expensesPages(state = 0, { type, pages }) {
    switch(type) {
        case GET_EXPENSES:
            return pages
        default:
            return state
    }
}