import { connect } from 'react-redux';
import Loader from './Loader';

function mapState(state) {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapState)(Loader)