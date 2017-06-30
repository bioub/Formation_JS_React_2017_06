/*
{
 type: 'ADD_CONTACT',
}
*/
export const MODIFY_CONTACT_PRENOM = 'MODIFY_CONTACT_PRENOM';
export const ADD_CONTACT = 'ADD_CONTACT';
export const MODIFY_HORLOGE_DELAY = 'MODIFY_HORLOGE_DELAY';

export const modifyContactPrenom = (prenom, index) => ({
    type: MODIFY_CONTACT_PRENOM,
    prenom,
    index,
});

export const addContact = () => ({
    type: ADD_CONTACT,
});

export const modifyHorlogeDelay = (delay) => ({
    type: MODIFY_HORLOGE_DELAY,
    delay,
});

