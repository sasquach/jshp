import React, { Component } from 'react';

import SimpleListItem from './SimpleListItem.jsx';


export default class CategoriesList extends Component {
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

        this.props.setCategoryFilter(category);
    }

    render() {
        return (
            <div className="c-categories">
                <h3>Filter by category:</h3>
                <ul>
                    {this.props.categories.map((category, index) =>
                        <SimpleListItem
                            key={index}
                            name={category}
                            selected={this.state.selected === category}
                            setFilter={this.setFilter} />)
                    }
                </ul>
            </div>
        );
    }
}

CategoriesList.propTypes = {
    setCategoryFilter: React.PropTypes.func,
    categories: React.PropTypes.array,
    selected: React.PropTypes.string,
};
