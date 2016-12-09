import React, { Component } from 'react';

import SimpleListItem from './SimpleListItem.jsx';


export default class AuthorsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
        this.setFilter = this.setFilter.bind(this);
    }

    setFilter(category) {
        this.setState({
            selected: category
        });

        this.props.setAuthorFilter(category);
    }

    render() {
        return (
            <div className="c-authors">
                <h3>Filter by author:</h3>
                <ul>
                    {this.props.authors.map((author, index) =>
                        <SimpleListItem
                            key={index}
                            index={index}
                            name={author}
                            selected={this.state.selected === author}
                            setFilter={this.setFilter} />
                    )}
                </ul>
            </div>
        );
    }
}

AuthorsList.propTypes = {
    setAuthorFilter: React.PropTypes.func,
    authors: React.PropTypes.array,
    selected: React.PropTypes.string,
};
