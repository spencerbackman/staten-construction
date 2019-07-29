import React from 'react';
import './scss/coating.scss';

class SealCoating extends React.Component {
    render() {
        return (
            <div id="coating-page">
                <h1 className="coating-header"> Seal Coating </h1>
                <div className="coating-header-underline"></div>
                <p className="coating-par">
                    When you apply a seal coat to your asphalt, that seal coat protects your asphalt from vehicles, 
                    prolonged effects of weather damage, prevents water from saturating your sub-grade, and gives 
                    your asphalt an attractive appearance.
                </p>
                <p className="coating-par">
                    We highly recommend seal coating for long life and reduced maintenance costs on asphalt surfaces.
                </p>
            </div>
        )
    }
}

export default SealCoating;