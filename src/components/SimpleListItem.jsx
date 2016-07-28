import React, { Component } from 'react';


export default class SimpleListItem extends Component {
    render () {
        return (
            <li
                className={this.props.selected ? 'h-active' : ''}
                onClick={() => this.props.setFilter(this.props.name)}>
                {this.props.name}
                {this.props.selected ?
                    <span onClick={(ev) => { ev.stopPropagation(); this.props.setFilter(null); }}> (remove)</span> :
                    null
                }
            </li> 
        );
    }
}


SimpleListItem.propTypes = {
    selected: React.PropTypes.bool,
    setFilter: React.PropTypes.func,
    name: React.PropTypes.string,
};
