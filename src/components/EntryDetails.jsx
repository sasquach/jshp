import React, { Component } from 'react';
import { Link } from 'react-router';


export default class EntryDetails extends Component {
    render() {
        return (
            <div className="c-entry-details">
                <Link to="/">Back</Link>
                <h3>{this.props.entry.title}</h3>
                <p><i>written by {this.props.entry.author}</i></p>
                <p>{this.props.entry.content}</p>
            </div>

        );
    }
}

EntryDetails.propTypes = {
    entry: React.PropTypes.object,
};
