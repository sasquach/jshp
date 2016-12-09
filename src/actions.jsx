import * as actionTypes from './actionTypes.jsx';


export function newPost (entry) {
    return {
        type: actionTypes.NEW_POST,
        index: entry.index,
        author: entry.author,
        title: entry.title,
        category: entry.category,
        content: entry.content,
    };
}


export function updatePost (entry) {
    return {
        type: actionTypes.UPDATE_POST,
        index: entry.index,
        content: entry.content,
    };
}


export function deletePost (index) {
    return {
        type: actionTypes.DELETE_POST,
        index: index,
    };
}


export function setCategoryFilter (value) {
    return {
        type: actionTypes.SET_CATEGORY_FILTER,
        value: value,
    };
}


export function setAuthorFilter (value) {
    return {
        type: actionTypes.SET_AUTHOR_FILTER,
        value: value,
    };
}
