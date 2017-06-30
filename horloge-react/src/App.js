import React from 'react';
import { Horloge } from './Horloge';
import { HelloForm } from './HelloForm';
import { desactivable } from './desactivable';
import { logLifeCycle } from './logLifeCycle';
import { connect } from 'react-redux';
import { addContact } from './actions'
import { contactsSelector } from './selectors'

const HorlogeDesactivable = logLifeCycle(desactivable(Horloge));
const HelloFormDesactivable = desactivable(HelloForm);

export let App = (props) => {

    const helloForms = props.contacts.map((c, i) =>
        <HelloFormDesactivable key={i} index={i} />
    );

    return <div>
        <HorlogeDesactivable format="HH:mm:ss" delay={3} />
        <hr />
        {helloForms}
        <button onClick={props.onClick}>+</button>
    </div>
};

const mapStateToProps = (state) => ({
    contacts: contactsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(addContact()),
});

App = connect(mapStateToProps, mapDispatchToProps)(App);