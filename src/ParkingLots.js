import React from 'react';
import './scss/parking.scss';

class ParkingLots extends React.Component {
    render() {
        return (
            <div id="parking-page"> 
                <h1 className="parking-header"> Parking Lots </h1>
                <div className="parking-header-underline"></div>
                <p className="parking-par">
                    Staten Construction will come in and prepare your existing clay gravel sub-grade by shaping, 
                    compacting, and treating the soil for grass control.
                </p>
                <p className="parking-par">
                    After the sub-grade of your parking lot is properly prepared, we will install your new asphalt.
                </p>
                <p className="parking-par">
                    If your parking lot does not have existing clay gravel sub-grade or needs additional site work, 
                    we can also help you with those needs.
                </p>
            </div>
        )
    }
}

export default ParkingLots; 