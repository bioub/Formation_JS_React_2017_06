import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { contacts, horloge } from './reducers';

export const configureStore = () => {

    return createStore(combineReducers({
        contacts,
        horloge,
    }), composeWithDevTools());
};
