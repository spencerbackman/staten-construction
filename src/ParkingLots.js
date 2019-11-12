import React from 'react';
import img from './images/parking_lot_chicot_med.png';
import img2 from './images/parking_lot_dollar_general.png';
import img3 from './images/parking_lot_lines.png';
import img4 from './images/parking_lot_lines2.png';
import img5 from './images/parking_lot_lines3.png';
import img6 from './images/seal_coating_driveway_before.png';
import img7 from './images/seal_coating_driveway.png';
import './scss/parking.scss';

const ParkingLots = () => {
        return (
            <div id="parking-page"> 
                <h1 className="parking-header"> Parking Lots </h1>
                <div className="parking-header-underline"></div>
                <img src={img} className="service-img" alt="Medical Center Parking lot"/>
                <img src={img2} className="service-img" alt="Dollar General Parking lot"/>
                <img src={img3} className="service-img" alt="Parking lot parking spaces"/>
                <img src={img4} className="service-img" alt="Parking lot parking lines"/>
                <img src={img5} className="service-img" alt="Parking lot parking lines"/>
                <img src={img6} className="service-img" alt="Residential Driveway Before"/>
                <img src={img7} className="service-img" alt="Residential Driveway After"/>
                <p className="parking-par">
                    A well-paved good looking parking lot can increase your property value and minimize the risk of injury. The most import step to making the longest lasting parking lot is in the preparation. We come in and prepare your existing clay gravel sub-grade by shaping, compacting, and treating the soil for grass control. Then we will install your new asphalt, put lines, paint curbs, and can continue to maintain your new parking lot. 
                </p>
                <p className="parking-par">
                    Whether it's a residential driveway, road, commercial parking lot, or any asphalt installation project, our experienced team will get the job done properly. For more information on our professional parking lot or other services, contact us or give us a call at (662) 226-6097.
                </p>
            </div>
        )
}

export default ParkingLots; 