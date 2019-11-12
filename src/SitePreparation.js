import React from 'react';
import img from './images/site_prep.png';
import img2 from './images/site_prep2.png';
import img3 from './images/site_prep3.png';
import img4 from './images/site_prep4.png';
import img5 from './images/site_prep5.png';
import './scss/prep.scss';

class SitePreparation extends React.Component {
    render() {
        return (
            <div id="prep-page">
                <h1 className="prep-header"> Site Preparation </h1>
                <div className="prep-header-underline"></div>
                <img src={img} className="service-image" alt="Site Preperation"/>
                <img src={img2} className="service-image" alt="Site Preperation"/>
                <img src={img3} className="service-image" alt="Site Preperation"/>
                <img src={img4} className="service-image" alt="Site Preperation"/>
                <img src={img5} className="service-image" alt="Site Preperation"/>
                <p className="prep-par">
                    The overall strength and longevity of a site is dependent not only on the design but also on the preparation done to set a solid sub-grade base for your site. We will perform the necessary excavations & compaction to put your site on a finish grade the architect or engineer plans show.
                </p>
                <p className="prep-par">
                    If you need any site preparation done, our experienced team will get the job done properly. For more information contact us or give us a call at (662) 226-6097.  
                </p> 
            </div>
        )
    }
}

export default SitePreparation;