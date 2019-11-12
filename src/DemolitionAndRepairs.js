import React from 'react';
import img from './images/chain_link_fence_repair.png';
import img2 from './images/fence_repair.png';
import img3 from './images/metal_post_fence.png';
import img4 from './images/metal_post_fence2.png';
import img5 from './images/metal_post_fence3.png';
import img6 from './images/new_fence.png';
import img7 from './images/new_fence2.png';
import img8 from './images/new_gate_animals.png';
import img9 from './images/new_gate.png';
import img10 from './images/new_gate2.png';
import img11 from './images/demolition-McDonalds.jpg';
import img12 from './images/demolition-McDonalds2.jpg';
import './scss/demo.scss';

class DemolitionAndRepairs extends React.Component {
    render() {
        return (
            <div id="demo-page">
                <h1 className="demo-header"> Demolition & Repairs </h1>
                <div className="demo-header-underline"></div>
                <img src={img} className="service-image" alt="Fence Repairs"/>
                <img src={img2} className="service-image" alt="Fence Repairs"/>
                <img src={img3} className="service-image" alt="Fence Repairs"/>
                <img src={img4} className="service-image" alt="Fence Repairs"/>
                <img src={img5} className="service-image" alt="Fence Repairs"/>
                <img src={img6} className="service-image" alt="Fence Repairs"/>
                <img src={img7} className="service-image" alt="Fence Repairs"/>
                <img src={img8} className="service-image" alt="Fence Repairs"/>
                <img src={img9} className="service-image" alt="Fence Repairs"/>
                <img src={img10} className="service-image" alt="Fence Repairs"/>
                <img src={img11} className="service-image" alt="McDonald's Demolition"/>
                <img src={img12} className="service-image" alt="McDonald's Demolition"/>
                <p className="demo-par">
                    We demolish and remove commercial and industrial buildings and/or all existing pavement. As a locally family owned and operated company, our professional team can demolish anything you need. For more information, contact us or give us a call at (62) 226-6097. 
                </p>
            </div>
        )
    }
}

export default DemolitionAndRepairs;