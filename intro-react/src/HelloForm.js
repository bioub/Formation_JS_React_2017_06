import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modifyContactPrenom } from './actions';
import { contactSelector } from './selectors'

export class HelloForm extends Component {

    constructor() {
        super();

        /*
        this.state = {
            value: '',
            prenom: '',
        };
        */

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(modifyContactPrenom(this._prenom, this.props.index))
        this.props.dispatch(modifyContactPrenom(this._prenom, this.props.index));
        /*
        this.setState({
            prenom: this.state.value,
        });
        */
    }

    handleChange(e) {
        this._prenom = e.target.value;
        /*
        this.setState({
            value
        });
        */
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
    prenom: contactSelector(state, ownProps.index).prenom,
});

HelloForm = connect(mapStateToProps)(HelloForm);