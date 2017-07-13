import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { connect } from 'react-redux';
import { modifyHorlogeDelay } from '../actions/horloge';
import { horlogeSelector } from '../selectors/index';

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
    this.timerId = setTimeout(this._update.bind(this), this.props.delay * 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    return (
      <div className="Horloge">
        {format(this.state.now, this.props.format)}
        <input type="number" value={this.props.delay} onChange={this.props.onChange}/>
      </div>
    );
  }

}

Horloge.propTypes = {
  format: PropTypes.string,
  delay: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Horloge.defaultProps = {
  format: 'HH:mm:ss',
  delay: 1,
};

const mapStateToProps = (state) => ({
  delay: horlogeSelector(state).delay,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(modifyHorlogeDelay(e.target.value)),
});

Horloge = connect(mapStateToProps, mapDispatchToProps)(Horloge);
