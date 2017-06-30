import { MODIFY_CONTACT_PRENOM, ADD_CONTACT, MODIFY_HORLOGE_DELAY } from '../actions';

export const contact = (prevState = {}, action) => {
    switch (action.type) {
        case MODIFY_CONTACT_PRENOM:
            return {
                ...prevState,
                prenom: action.prenom,
            };
    }

    return prevState;
};

export const contacts = (prevState = [], action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return [
                ...prevState,
                {}
            ];
        case MODIFY_CONTACT_PRENOM:
            return [
                ...prevState.slice(0, action.index),
                contact(prevState[action.index], action),
                ...prevState.slice(action.index + 1),
            ]
    }

    return prevState;
};

export const horloge = (prevState = {}, action) => {
    switch (action.type) {
        case MODIFY_HORLOGE_DELAY:
            return {
                ...prevState,
                delay: action.delay,
            };
    }

    return prevState;
};