import React from 'react';
import img from './images/asphalt-overlay-lake.jpg';
import img2 from './images/asphalt-overlay-sonic.jpg';
import img3 from './images/seal_coating_driveway.png';
import './scss/asphalt-overlay.scss';

class AsphaltOverlay extends React.Component {
    render() {
        return (
            <div id="asphalt-overlay-page">
                <h1 className="as-overlay-header"> Asphalt Overlay </h1>
                <div className="as-overlay-header-underline"></div>
                <img src={img} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
                <p className="as-overlay-par">
                    When asphalt weakens or diminishes due to age, weather, or lack of maintenance, you may think it's the end of it's life. That's where asphalt overlay comes in handy. You can expand the lifespan of your asphalt greatly. We will locate any weak areas in the sub-grade, repair them, and overlay your existing asphalt. We recommended getting an overlay when your asphalt has large potholes, ruts, or low areas that hold water. If you're unsure if you need an asphalt overlay we will come to you and determine what your asphalt needs.
                </p>
                <p className="as-overlay-par">
                    For more information about our asphalt overlay professional service or other services, contact us or give us a call at (662) 226-6097.
                </p>
            </div>
        )
    }
}

export default AsphaltOverlay;