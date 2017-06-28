'use strict';

import format from 'date-fns/format';
import './horloge.scss';

const dateFormat = 'HH:mm:ss';
const delay = 1000;

export class Horloge {
    constructor(container) {
        this._container = container;
        this.update = this.update.bind(this);
    }
    update() {
        this._container.innerText = format(new Date(), dateFormat);
    }
    start() {
        this.update();
        setInterval(this.update, delay);
    }
}
