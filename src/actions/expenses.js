import * as expensesApi from '../api/expenses';

export const GET_EXPENSES = 'GET_EXPENSES'

export function getExpenses(params) {
    return async dispatch => {
        const { data, numOfPages } = await expensesApi.getExpenses(params)
        dispatch({ type: GET_EXPENSES, expenses: data, pages: numOfPages })
    }
}