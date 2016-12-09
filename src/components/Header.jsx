import React, { Component } from 'react';

const logo = require('../assets/logo.jpg');

class Header extends Component {
    render() {
        return (
            <div className="c-header">
                <img src={logo} className="c-header__logo" />
                <h1 className="c-header__text">Blog Application</h1>
            </div>
        );
    }
}

export default Header;
