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
                    <Route path={`${props.match.url}/add`} component={ContactAdd} />
                    <Route path={`${props.match.url}/:id([1-9][0-9]+)`} component={ContactShow} />
                </Switch>
            </Col>
        </Row>
    </Grid>;
};