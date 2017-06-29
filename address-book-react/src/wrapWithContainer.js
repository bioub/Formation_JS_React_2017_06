import React, { Component } from 'react';
/*

Creer un HOC qui englobe un composant
dans <div className="container">
</div>

*/

export const wrapWithContainer = (OriginalComponent) => {

    class WrapWithContainer extends Component {
        render() {
            return <div className="container">
                <OriginalComponent {...this.props}/>
            </div>;
        }
    }

    WrapWithContainer.displayName =
        `wrapWithContainer(${OriginalComponent.displayName || OriginalComponent.name})`;

  return WrapWithContainer;
};
