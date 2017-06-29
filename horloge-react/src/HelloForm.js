import React, { Component } from 'react';

export class HelloForm extends Component {

    constructor() {
        super();

        this.state = {
            value: '',
            prenom: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            prenom: this.state.value,
        });
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({
            value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Prénom : <input value={this.state.value} onChange={this.handleChange}/>
                    <button>Dit bonjour</button>
                </form>
                <p>Bonjour {this.state.prenom} !</p>
            </div>
        );
    }
}