'use strict';

import { Horloge } from './horloge';

const container = document.querySelector('.horloge');
const clock = new Horloge(container);
clock.start();