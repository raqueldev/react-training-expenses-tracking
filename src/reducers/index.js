// { user: (), expenses: [], selectdExpense: []}
import { combineReducers } from 'redux'
import user from './user'
import { expenses, expensesPages }  from './expenses'
import { isLoading } from './utils'

export default combineReducers({
    isLoading,
    user,
    expenses,
    expensesPages
})