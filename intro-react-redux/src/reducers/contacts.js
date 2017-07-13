import { ADD_CONTACT, MODIFY_CONTACT_PRENOM } from '../actions/contacts';

export const contact = (state = {}, action) => {
  switch (action.type) {
    case MODIFY_CONTACT_PRENOM:
      return {
        ...state,
        prenom: action.prenom,
      };
    default:
      return state;
  }
};

export const contacts = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [
        ...state,
        {},
      ];
    case MODIFY_CONTACT_PRENOM:
      const i = action.i;
      return [
        ...state.slice(0, i),
        contact(state[i], action),
        ...state.slice(i + 1),
      ];
    default:
      return state;
  }
};
