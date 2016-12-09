import {connect} from 'react-redux';

import EntryList from '../components/EntryList.jsx';


function mapStateToProps (state) {
    const visibleEntries = state.entries.order.map(
        id => state.entries.index[id]
    ).filter(entry => {
        if (state.filters.category && entry.category === state.filters.category) {
            return true;
        }
        if (state.filters.author && entry.author === state.filters.author) {
            return true;
        }
        if (!state.filters.author && !state.filters.category) {
            return true;
        }
        return false;
    });
    return {
        entries: visibleEntries,
    };
}


export default connect(mapStateToProps)(EntryList);
