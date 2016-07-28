import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import EntryList from '../components/EntryList.jsx';
import EntryDetails from '../components/EntryDetails.jsx';
import AuthorsList from '../components/AuthorsList.jsx';
import CategoriesList from '../components/CategoriesList.jsx';
import Header from '../components/Header.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryFilter: null,
            authorFilter: null
        };
    }

    setCategoryFilter(filter) {
        this.setState({
            categoryFilter: filter
        });
    }

    setAuthorFilter(filter) {
        this.setState({
            authorFilter: filter
        });
    }

    render() {
        return (
            <div className="c-app">
                <Header />
                <div className="l-sidebar">
                    <CategoriesList setCategoryFilter={this.setCategoryFilter.bind(this)} />
                    <AuthorsList setAuthorFilter={this.setAuthorFilter.bind(this)} />
                </div>
                <div className="l-main">
                    <Router history={browserHistory}>
                        <Route path="/" component={() => (
                            <EntryList
                                categoryFilter={this.state.categoryFilter}
                                authorFilter={this.state.authorFilter} 
                            />
                        )} />
                        <Route path="/post/:id" component={EntryDetails} />
                    </Router>
                 </div>
            </div>
        );
    }
}

export default App;
