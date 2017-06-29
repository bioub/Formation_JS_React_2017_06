import React from 'react';

import {
    Grid,
    Row,
    Col,
} from 'react-bootstrap';

import {
    Switch,
    Route
} from 'react-router-dom'

import {ContactAdd} from './ContactAdd'
import {ContactList} from './ContactList'
import {ContactShow} from './ContactShow'

export const ContactLayout = (props) => {
    return <Grid>
        <Row>
            <Col sm={3}>
                <ContactList />
            </Col>
            <Col sm={9}>
                <Switch>
                    <Route path="/contacts/add" component={ContactAdd} />
                    <Route path="/contacts/:id" component={ContactShow} />
                </Switch>
            </Col>
        </Row>
    </Grid>;
};