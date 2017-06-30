import { MODIFY_CONTACT_PRENOM, ADD_CONTACT, MODIFY_HORLOGE_DELAY } from '../actions/contacts';

export const contact = (state = {}, action) => {
  switch (action.type) {
    case MODIFY_CONTACT_PRENOM:
      return {
        ...state,
        prenom: action.prenom,
      };
  }
  return state;
};

export const contacts = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [
        ...state,
        {}
      ]
    case MODIFY_CONTACT_PRENOM:
      const i = action.i;
      return [
        ...state.slice(0, i),
        contact(state[i], action),
        ...state.slice(i + 1),
      ]
  }
  return state;
};


export const horloge = (state = {}, action) => {
  switch (action.type) {
    case MODIFY_HORLOGE_DELAY:
      return {
        ...state,
        delay: action.delay,
      }
  }

  return state;
};