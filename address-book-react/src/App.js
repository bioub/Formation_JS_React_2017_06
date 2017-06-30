import React, { Component } from 'react';

import {
    Navbar,
    Nav,
    NavItem,
} from 'react-bootstrap';

import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

import {
    LinkContainer
} from 'react-router-bootstrap'

import { Home } from './Home';
import { ContactLayout } from './ContactLayout';

import { wrapWithContainer } from './wrapWithContainer';

const HomeWithContainer = wrapWithContainer(Home);

export class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">AddressBook</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
              <LinkContainer to="/contacts">
                <NavItem eventKey={1}>Contacts</NavItem>
              </LinkContainer>
          </Nav>
        </Navbar>
        <Route exact path="/" component={HomeWithContainer}/>
        <Route path="/contacts" component={ContactLayout}/>
      </div>
    </BrowserRouter>
    );
  }
}

