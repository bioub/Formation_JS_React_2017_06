export const MODIFY_CONTACT_PRENOM = 'MODIFY_CONTACT_PRENOM';
export const ADD_CONTACT = 'ADD_CONTACT';

export const modifyContactPrenom = (prenom, i) => ({
  type: MODIFY_CONTACT_PRENOM,
  prenom,
  i
});

export const addContact = () => ({
  type: ADD_CONTACT,
});
