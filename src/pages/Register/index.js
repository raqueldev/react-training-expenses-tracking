import { connect } from 'react-redux'
import Register from './Register'
import { register } from '../../actions/user'

function mapDispatch(dispatch) {
    return {
        register: data => dispatch(register(data))
    }
}
export default connect(undefined, mapDispatch)(Register)