import React, { Component } from 'react';

import {
    Redirect
} from 'react-router-dom';

export class ContactAdd extends Component {

    constructor(props) {
        super(props);

        this.state = {
          redirect: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // traitement

        this.setState({
            redirect: true,
        });
    }

    render() {npm
        return <div>
            <h2>Contact Add</h2>
            <form onSubmit={this.handleSubmit}>
                <p>
                    Prénom : <input />
                </p>
                <button>Ajouter</button>
            </form>
            {this.state.redirect && <Redirect to="/contacts" />}
        </div>;
    }
}