import { createStore, combineReducers } from 'redux';
import { contacts, horloge } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const configureStore = () => {
  return createStore(
    combineReducers({
      contacts,
      horloge,
    }),
    composeWithDevTools(),
  );
};