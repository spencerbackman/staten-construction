import React from 'react';
import './scss/concrete.scss';

class Concrete extends React.Component {
    render() {
        return (
            <div id="concrete-page">
                <h1 className="concrete-header"> Concrete </h1>
                <div className="concrete-header-underline"></div>
                <p className="concrete-par">
                    Staten Construction can build you a concrete sidewalk or concrete curb or pour a concrete slab for your foundation.
                </p>
            </div>
        )
    }
}

export default Concrete;