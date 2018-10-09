import { connect } from 'react-redux'
import App from './App'
import { withRouter } from 'react-router-dom'

function mapState(state) {
    return {
        user: state.user
    }
}

//
export default withRouter(connect(mapState)(App))
