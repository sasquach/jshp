import {connect} from 'react-redux';

import Sidebar from '../components/Sidebar.jsx';
import * as actions from '../actions.jsx';


function mapStateToProps (state) {
    return {
        authors: state.entries.authors,
        categories: state.entries.categories,
        categoryFilter: state.filters.category,
        authorFilter: state.filters.author,
    };
}

function mapDispatchToProps (dispatch) {
    return {
        setCategoryFilter: (value) => dispatch(actions.setCategoryFilter(value)),
        setAuthorFilter: (value) => dispatch(actions.setAuthorFilter(value)),
        dispatch: dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
