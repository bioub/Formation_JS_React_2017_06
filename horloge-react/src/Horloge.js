import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

export class Horloge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            now: new Date(),
        };
        this._start();
    }

    _update() {
        this.setState({
            now: new Date(),
        });
    }

    _start() {
        this.intervalId = setInterval(this._update.bind(this), this.props.delay);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        console.log('Horloge', 'render');
        return (
            <div className="Horloge">
                {format(this.state.now, this.props.format)}
            </div>
        );
    }
}

Horloge.propTypes = {
    format: PropTypes.string,
    delay: PropTypes.number,
};

Horloge.defaultProps = {
    format: 'HH:mm:ss',
    delay: 1000,
};