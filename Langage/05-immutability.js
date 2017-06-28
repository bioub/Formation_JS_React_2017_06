const cloneDeep = require('lodash/cloneDeep');

const state = {
  contacts: [],
  newContact: {
    adresse: {

    }
  },
};

// Modifie le tableau existant :
// state.contacts.push('Romain');

// Ne modifie pas le tableau existant
state.contacts = [...state.contacts, 'Romain'];
state.newContact = {...state.newContact, prenom: 'Romain'};

const newState = cloneDeep(state);
