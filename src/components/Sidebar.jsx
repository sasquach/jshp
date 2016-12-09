import React from 'react';

import AuthorsList from '../components/AuthorsList.jsx';
import CategoriesList from '../components/CategoriesList.jsx';
import Generator from '../components/Generator.jsx';


export default class Sidebar extends React.Component {
    render () {
        return <div className="l-sidebar">
            <Generator dispatch={this.props.dispatch} />
            <CategoriesList categories={this.props.categories} setCategoryFilter={this.props.setCategoryFilter} />
            <AuthorsList authors={this.props.authors} setAuthorFilter={this.props.setAuthorFilter} />
        </div>;
    }
}


Sidebar.propTypes = {
    categories: React.PropTypes.array,
    authors: React.PropTypes.array,
    categoryFilter: React.PropTypes.string,
    authorFilter: React.PropTypes.string,
    setCategoryFilter: React.PropTypes.func,
    setAuthorFilter: React.PropTypes.func,
    dispatch: React.PropTypes.func,
};
