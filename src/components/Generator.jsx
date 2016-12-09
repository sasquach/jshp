import React from 'react';
import loremIpsum from 'lorem-ipsum';

import * as actions from '../actions.jsx';
import * as actionTypes from '../actionTypes.jsx';


const categories = loremIpsum({count: 5, units: 'words', format: 'plain'}).split(' ');
const authors = loremIpsum({count: 5, units: 'words', format: 'plain'}).split(' ');
const availableActions = [
    actionTypes.NEW_POST,
    actionTypes.UPDATE_POST,
    actionTypes.DELETE_POST,
];
let postIds = [];
let postsCounter = 0;


function choice (array) {
    return array[Math.floor(Math.random() * array.length)];
}


function getContent () {
    return loremIpsum({count: 3, units: 'sentence', format: 'plain'});
}


function getTitle () {
    return loremIpsum({count: 4, units: 'words', format: 'plain'});
}


function getRandomTime () {
    return 500 + Math.random() * 3000;
}


function getActionBody (type) {
    let postId;
    switch (type) {
        case actionTypes.NEW_POST:
            postsCounter += 1;
            postIds.push(postsCounter);
            return actions.newPost({
                index: postsCounter,
                author: choice(authors),
                title: getTitle(),
                category: choice(categories),
                content: getContent(),
            });
        case actionTypes.UPDATE_POST:
            return actions.updatePost({
                index: choice(postIds),
                content: getContent(),
            });
        case actionTypes.DELETE_POST:
            postId = choice(postIds);
            postIds.splice(postIds.indexOf(postId), 1);
            return actions.deletePost(postId);
        default:
            return null;
    }
}


function getRandomAction () {
    let type;
    if (postIds.length < 5) {
        type = actionTypes.NEW_POST;
    } else if (postIds.length > 10) {
        type = choice([actionTypes.DELETE_POST, actionTypes.UPDATE_POST]);
    } else {
        type = choice(availableActions);
    }
    return getActionBody(type);
}


export default class Generator extends React.Component {
    constructor (props) {
        super(props);
        this.newPost = this.newPost.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.startCycle = this.startCycle.bind(this);
    }

    newPost () {
        const action = getActionBody(actionTypes.NEW_POST);
        console.log(action);
        this.props.dispatch(action);
    }

    updatePost () {
        const action = getActionBody(actionTypes.UPDATE_POST);
        console.log(action);
        this.props.dispatch(action);
    }

    deletePost () {
        const action = getActionBody(actionTypes.DELETE_POST);
        console.log(action);
        this.props.dispatch(action);
    }

    startCycle () {
        let cycle = () => {
            const action = getRandomAction();
            console.log(action);
            this.props.dispatch(action);
            setTimeout(cycle, getRandomTime());
        };
        cycle();
    }

    render () {
        return <p>
            <button onClick={this.newPost}>New post</button>
            <button onClick={this.updatePost}>Update post</button>
            <button onClick={this.deletePost}>Delete post</button>
            <button onClick={this.startCycle}>Start generator</button>
        </p>;
    }
}

Generator.propTypes = {
    dispatch: React.PropTypes.func,
};
