import React, { Component } from 'react';

import EntryListItem from './EntryListItem.jsx';


export default class EntryList extends Component {
    render() {
        const entries = this.props.entries.map((entry, index) =>
            <EntryListItem key={index} index={index} {...entry} />
        );
        return (
            <div className="c-entries">
                <h2>Posts:</h2>
                {entries}
            </div>
        );
    }
}

EntryList.propTypes = {
    categoryFilter: React.PropTypes.string,
    authorFilter: React.PropTypes.string,
    entries: React.PropTypes.array,
};
