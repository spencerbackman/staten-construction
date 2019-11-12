import React from 'react';
import img from './images/seal_coating_driveway.png';
import img2 from './images/seal_coating_medical_center2.jpg';
import img3 from './images/seal_coating-medical-center.jpg';
import './scss/coating.scss';

class SealCoating extends React.Component {
    render() {
        return (
            <div id="coating-page">
                <h1 className="coating-header"> Seal Coating </h1>
                <div className="coating-header-underline"></div>
                <img src={img} className="service-image" alt="Residential Driveway Seal coating"/>
                <img src={img2} className="service-image" alt="Parking lot seal coating"/>
                <img src={img3} className="service-image" alt="Parking lot seal coating"/>
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