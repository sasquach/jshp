import React from 'react';
import {connect} from 'react-redux';

import EntryDetails from '../components/EntryDetails.jsx';


function mapStateToProps (state) {
    return {
        entriesIndex: state.entries.index,
    };
}

class EntryDetailsWrapper extends React.Component {
    render() {
        const entry = this.props.entriesIndex[this.props.params.id];
        return <EntryDetails entry={entry} />;
    }
}

EntryDetailsWrapper.propTypes = {
    entriesIndex: React.PropTypes.object,
    params: React.PropTypes.object,
};


export default connect(mapStateToProps)(EntryDetailsWrapper);
