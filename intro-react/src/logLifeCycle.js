import React, { Component } from 'react';

export const logLifeCycle = (OriginalComponent) => {

    class LogLifeCycle extends Component {

        componentWillMount() {
            console.log('componentWillMount');
            console.log('Current props', this.props);
        }

        componentDidMount() {
            console.log('componentDidMount');
            console.log('Current props', this.props);
        }

        componentWillUpdate(nextProps) {
            console.log('componentWillUpdate');
            console.log('Current props', this.props);
            console.log('Next props', nextProps);
        }

        componentDidUpdate(prevProps) {
            console.log('componentDidUpdate');
            console.log('Current props', this.props);
            console.log('Previous props', prevProps);
        }

        componentWillUnmount() {
            console.log('componentWillUnmount');
            console.log('Current props', this.props);
        }

        render() {
            console.log('render');
            console.log('Current props', this.props);
            return <OriginalComponent {...this.props} />
        }
    }

    LogLifeCycle.displayName =
        `LogLifeCycle(${OriginalComponent.displayName || OriginalComponent.name})`;

    return LogLifeCycle;

};
