import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { connect } from 'react-redux';
import { modifyHorlogeDelay } from './actions'
import { horlogeSelector } from './selectors'

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
        this._start();
    }

    _start() {
        this.timeoutId = setTimeout(this._update.bind(this), this.props.delay * 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutId);
    }

    render() {
        console.log('Horloge', 'render');
        return (
            <div className="Horloge">
                {format(this.state.now, this.props.format)}
                <input type="number" onChange={this.props.onChangeDelay}/>
            </div>
        );
    }
}

Horloge.propTypes = {
    format: PropTypes.string,
    // delay: PropTypes.oneOfType(),
};

Horloge.defaultProps = {
    format: 'HH:mm:ss',
    delay: 1,
};

const mapStateToProps = state => ({
    delay: horlogeSelector(state).delay,
})

const mapDispatchToProps = (dispatch) => ({
    onChangeDelay: (e) => dispatch(modifyHorlogeDelay(e.target.value))
})

Horloge = connect(mapStateToProps, mapDispatchToProps)(Horloge);