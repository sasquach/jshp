import { createStore, combineReducers } from 'redux';

import entries from './reducers/entries.jsx';
import filters from './reducers/filters.jsx';


export default function configureStore () {
    const reducers = combineReducers({filters, entries});
    const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}
