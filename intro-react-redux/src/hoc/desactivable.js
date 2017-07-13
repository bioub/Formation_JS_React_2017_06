import React, { Component } from 'react';

export const desactivable = (OriginalComponent) => {

  class Desactivable extends Component {

    constructor(props) {
      super(props);
      this.state = {
        enable: true,
      };
      this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        enable: !this.state.enable,
      });
    }

    render() {
      const {label, ...passThroughProps} = this.props;

      return (
        <div>
          {this.state.enable && <OriginalComponent {...passThroughProps} />}
          <button onClick={this.toggle}>{label}</button>
          <hr />
        </div>
      );
    }
  }

  Desactivable.defaultProps = {
    label: 'Toggle',
  };

  Desactivable.displayName =
    `desactivable(${OriginalComponent.displayName || OriginalComponent.name})`;

  return Desactivable;

};
