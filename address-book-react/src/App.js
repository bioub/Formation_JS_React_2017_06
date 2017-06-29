import React, { Component } from 'react';

import {
    Navbar,
    Nav,
    NavItem,
} from 'react-bootstrap';

import {
    BrowserRouter,
    Route,
} from 'react-router-dom';

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
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
          </Nav>
        </Navbar>
        <Route exact path="/" component={HomeWithContainer}/>
        <Route path="/contacts" component={ContactLayout}/>
      </div>
    </BrowserRouter>
    );
  }
}

