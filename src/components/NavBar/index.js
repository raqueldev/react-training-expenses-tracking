import { connect } from 'react-redux';
import NavBar from './NavBar';
import { logout } from '../../actions/user';


function mapDispatch(dispatch) {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(undefined, mapDispatch)(NavBar)