import React, { Component } from 'react';
import { Link } from 'react-router';


export default class EntryListItem extends Component {
    render() {
        return <div>
            <h3><Link to={`/post/${this.props.index}`}>{this.props.title}</Link></h3>
            <p>{this.props.content}</p>
        </div>;
    }
}


EntryListItem.propTypes = {
    index: React.PropTypes.number,
    title: React.PropTypes.string,
    content: React.PropTypes.string,
};
