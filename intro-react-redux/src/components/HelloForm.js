import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modifyContactPrenom } from '../actions/contacts';
import { contactSelector } from '../selectors/index';

export class HelloForm extends Component {

    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(modifyContactPrenom(this.value, this.props.i));
    }

    handleChange(e) {
        this.value = e.target.value;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Prénom : <input  onChange={this.handleChange}/>
                    <button>Dit bonjour</button>
                </form>
                <p>Bonjour {this.props.prenom} !</p>
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => ({
    prenom: contactSelector(state, ownProps.i).prenom,
});

HelloForm = connect(mapStateToProps)(HelloForm);