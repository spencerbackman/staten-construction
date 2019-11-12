import React from 'react';
import img from './images/concrete.jpg';
import img2 from './images/concrete2.jpg';
import img3 from './images/concrete3.png';
import img4 from './images/concrete4.png';
import './scss/concrete.scss';

class Concrete extends React.Component {
    render() {
        return (
            <div id="concrete-page">
                <h1 className="concrete-header"> Concrete </h1>
                <div className="concrete-header-underline"></div>
                <img src={img} className="service-img" alt="Laying concrete dock at lake."/>
                <img src={img2} className="service-img" alt="Laying concrete for a pavilion"/>
                <img src={img3} className="service-img" alt="Concrete for path by Grenada lake."/>
                <img src={img4} className="service-img" alt="Extending Concrete for Exxon."/>
                <p className="concrete-par">
                    If you need a sidewalk, curb, or a concrete slab for your foundation we can do it. We always take the proper steps to prepare and get the job done properly so you can get the most life out of your concrete. For more information about our professional concrete services, contact us or give us a call at (662) 226-6097.
                </p>
            </div>
        )
    }
}

export default Concrete;