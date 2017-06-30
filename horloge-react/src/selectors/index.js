

export const horlogeSelector = (state) => state.horloge;
export const contactsSelector = (state) => state.contacts;
export const contactSelector = (state, i) =>
    contactsSelector(state)[i];