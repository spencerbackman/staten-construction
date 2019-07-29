import React from 'react';
import './scss/asphalt-overlay.scss';

class AsphaltOverlay extends React.Component {
    render() {
        return (
            <div id="asphalt-overlay-page">
                <h1 className="as-overlay-header"> Asphalt Overlay </h1>
                <div className="as-overlay-header-underline"></div>
                <p className="as-overlay-par">
                    If your existing asphalt has large potholes, ruts, or low areas that hold water, Staten Construction will come and 
                    locate any weak areas in the sub-grade, repair them, and then overlay your existing asphalt.
                </p>
            </div>
        )
    }
}

export default AsphaltOverlay;