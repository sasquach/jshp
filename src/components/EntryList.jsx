import React, { Component } from 'react';

import { entries } from '../generator.jsx';
import EntryListItem from './EntryListItem.jsx';


export default class EntryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries
        };
    }

    render() {
        const entries = this.state.entries.filter((entry) => {
            if (this.props.categoryFilter && entry.category === this.props.categoryFilter) {
                return true;
            }
            if (this.props.authorFilter && entry.author === this.props.authorFilter) {
                return true;
            }
            if (!this.props.authorFilter && !this.props.categoryFilter) {
                return true;
            }
            return false;
        }).map((entry, index) =>
            <EntryListItem key={index} index={index} title={entry.title} content={entry.content} />
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
    authorFilter: React.PropTypes.string
};
