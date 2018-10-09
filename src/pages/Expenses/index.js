import { connect } from 'react-redux'
import Expenses from './Expenses'
import { getExpenses } from '../../actions/expenses'

function mapState(state) {
    return {
        expenses: state.expenses,
        pages: state.expensesPages
    }
}

function mapDispatch(dispatch) {
    return {
        getExpenses: params => dispatch(getExpenses(params))
    }
}
export default connect(mapState, mapDispatch)(Expenses)