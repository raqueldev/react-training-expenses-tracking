import { connect } from 'react-redux'
import Login from './Login'
import { login } from '../../actions/user'

function mapDispatch(dispatch) {
    return {
        login: data => dispatch(login(data))
    }
}
export default connect(undefined, mapDispatch)(Login)