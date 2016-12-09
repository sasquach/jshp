import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import EntryList from '../containers/EntryList.jsx';
import EntryDetails from '../containers/EntryDetails.jsx';
import Header from '../components/Header.jsx';
import Sidebar from '../containers/Sidebar.jsx';


export default class App extends React.Component {
    render() {
        return (
            <div className="c-app">
                <Header />
                <Sidebar />
                <div className="l-main">
                    <Router history={browserHistory}>
                        <Route path="/" component={EntryList} />
                        <Route path="/post/:id" component={EntryDetails} />
                    </Router>
                 </div>
            </div>
        );
    }
}
