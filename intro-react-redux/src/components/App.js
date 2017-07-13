import React from 'react';
import { connect } from 'react-redux';

import { Horloge } from './Horloge';
import { HelloForm } from './HelloForm';
import { desactivable } from '../hoc/desactivable';
import { addContact } from '../actions/contacts';
import { contactsSelector } from '../selectors/index';

const HorlogeDesactivable = desactivable(Horloge);
const HelloFormDesactivable = desactivable(HelloForm);

export let App = (props) => {
  const contactForms = props.contacts.map((c, i) =>
    <HelloFormDesactivable key={i} i={i}/>,
  );

  return <div>
    <HorlogeDesactivable format="HH:mm:ss" delay={3}/>
    {contactForms}
    <button onClick={props.onClick}>+</button>
  </div>;
};

const mapStateToProps = (state) => ({
  contacts: contactsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(addContact()),
});

App = connect(mapStateToProps, mapDispatchToProps)(App);
