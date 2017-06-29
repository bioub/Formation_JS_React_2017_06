import React from 'react';
import { Horloge } from './Horloge';
import { HelloForm } from './HelloForm';
import { desactivable } from './desactivable';

const HorlogeDesactivable = desactivable(Horloge);
const HelloFormDesactivable = desactivable(HelloForm);

export const App = () => <div>
    <HorlogeDesactivable format="HH:mm:ss" delay={3000}/>
    <hr />
    <HelloFormDesactivable label="Clic moi !"/>
</div>;
