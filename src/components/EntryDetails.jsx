import React, { Component } from 'react';
import { Link } from 'react-router';

import { entries } from '../generator.jsx';

class EntryDetails extends Component {
    constructor(props) {
        super(props);
        const { id } = this.props.params;
        this.state = {
            post: entries[id]
        };
    }

    render() {
        return (
            <div className="c-entry-details">
                <Link to="/">Back</Link>
                <h3>{this.state.post.title}</h3>
                <p>{this.state.post.author}</p>
                <p>{this.state.post.content}</p>
            </div>

        );
    }
}

EntryDetails.propTypes = {
    categoryFilter: React.PropTypes.string,
    authorfilter: React.PropTypes.string,
    params: React.PropTypes.object
};

export default EntryDetails;
