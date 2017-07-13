import { combineReducers, createStore } from 'redux';
import { contacts } from './reducers/contacts';
import { horloge } from './reducers/horloge';
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
