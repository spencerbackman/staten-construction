import React from 'react';
import residential from './images/residential-asphalt.png';
import commercial from './images/commercial-asphalt.png';
import img from './images/asphalt-overlay-lake.jpg';
import img2 from './images/seal_coating_driveway.png';
import img3 from './images/seal_coating-medical-center.jpg'
import img4 from './images/parking_lot_dollar_general.png';
import img5 from './images/asphalt-overlay-sonic.jpg';
import img6 from './images/seal_coating_medical_center2.jpg';
import './scss/asphalt.scss';

class Asphalt extends React.Component {
    render() {
        return (
            <div id="asphalt-page">
                <div className="asphalt-section">
                    <h1 className="asphalt-header"> Asphalt </h1>
                    <div className="asphalt-header-underline"></div>
                </div>
                <img src={img} className="service-image" alt="Grenada Lake road." />
                <img src={img2} className="service-image" alt="Residential Driveways" />
                <img src={img3} className="service-image" alt="Grenada Medical Complex Parking Lot" />
                <img src={img4} className="service-image" alt="Dollar General Asphalt Parking Lot" />
                <img src={img5} className="service-image" alt="Sonic Asphalt Overlay" />
                <img src={img6} className="service-image" alt="Seal Coating Medical Center"/>
                <div className="asphalt-section">
                    <h2 className="asphalt-top-header"> Asphalt Work </h2>
                    <p className="asphalt-par">  
                        When you call us with an asphalt need, we will meet with you and devise a comprehensive plan to meet those needs. 
                        This plan will show how we will do the work, when we will do the work and give you a guaranteed price for the work. 
                        All of this will be done at no obligation and FREE of charge.
                    </p>
                </div> 
                <div className="asphalt-section padding-bottom50">
                    <h2 className="asphalt-top-header"> Asphalt Services </h2>
                    <h4 className="asphalt-header4"> New Asphalt Driveways, Streets & Parking Lots </h4>
                    <p className="asphalt-par">
                        Staten Construction will come in and prepare your existing clay gravel sub-grade by shaping, compacting, and treating 
                        the soil for grass control.
                    </p>
                    <p className="asphalt-par">
                        After the sub-grade is properly prepared, we will install your new asphalt.
                    </p>
                    <p className="asphalt-par">
                        If you do not have existing clay gravel sub-grade or need additional site work, we can also help you with those needs.
                    </p>
                </div>
                <div className="asphalt-how-section">
                    <h2 className="asphalt-how-header"> How We Do It </h2>
                    <h4 className="asphalt-how-header4"> We start and end with quality and durability in mind. </h4>
                    <p className="asphalt-how-par"> All thickness of processed stone may vary to comply with site conditions. </p>
                    <div className="asphalt-row">
                        <div className="asphalt-column">
                            <h5 className="asphalt-header5"> Residential Pavement </h5>
                            <div className="asphalt-row">
                                <img src={residential} className="asphalt-how-img" alt="Residential Pavement Design"/>
                                <ol>
                                    <li> 1.5" - 2" of Asphalt </li>
                                    <li> 6" Processed Stone Base </li>
                                    <li> Sub-grade </li>
                                </ol>
                            </div>
                        </div>
                        <div className="asphalt-column">
                            <h5 className="asphalt-column"> Commercial / Industrial </h5>
                            <div className="asphalt-row">
                                <img src={commercial} className="asphalt-how-img" alt="Commercial/Industrial Pavement Design"/>
                                <ol>
                                    <li> 1.5" - 2" of Asphalt </li>
                                    <li> 2" Asphalt Binder </li>
                                    <li> 6" Processed Stone Base </li>
                                    <li> Sub-grade </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="asphalt-row2">
                        <div className="asphalt-section2">
                            <h2 className="asphalt-header2"> Asphalt Overlays </h2>
                            <p className="asphalt-par"> 
                                If your existing asphalt has large potholes, ruts, or low areas that hold water, asphalt specialists will come 
                                locate any weak areas in the sub-grade, repair them, and then overlay your existing asphalt. 
                            </p>
                        </div>

                        <div className="asphalt-section2">
                            <h2 className="asphalt-header2"> Striping </h2>
                            <p className="asphalt-par">
                                Staten Construction can handle all your striping needs for parking lots on asphalt or concrete surfaces — including 
                                handicaps and fire lanes. Stencil and custom markings are also available.
                            </p>
                        </div> 
                        <div className="asphalt-section2">
                            <h2 className="asphalt-header2"> Asphalt Repairs & Patchwork </h2>
                            <p className="asphalt-par">
                                When you have small potholes or low areas that hold water, Staten Construction will come in and patch those areas with 
                                new hot-mix asphalt.
                            </p>
                        </div>

                        <div className="asphalt-section2">
                            <h2 className="asphalt-header2"> Asphalt Curbs & Wheel Bumpers </h2>
                            <p className="asphalt-par">
                                Staten Construction has asphalt curbing machines that can lay your asphalt curb or wheel bumper.
                            </p>
                        </div>
                        <div className="asphalt-section2">
                            <h2 className="asphalt-header2"> Asphalt Seal Coating </h2>
                            <p className="asphalt-par">
                                When you apply a seal coat to your asphalt, this protects it from vehicles, prolonged effects of weather damage, prevents 
                                water from saturating your sub-grade, and fives your asphalt an attractive appearance. We highly recommend seal coating for 
                                long life and reduced maintenance costs on asphalt surfaces.
                            </p>
                        </div>
                        <div className="asphalt-section2">
                            <h2 className="asphalt-header2"> Jobs We Specialize In </h2>
                            <ul>
                                <li> Private Driveways </li>
                                <li> Apartment Complexes </li>
                                <li> Recreational Facilities </li>
                                <li> Tennis Courts </li>
                                <li> Golf Courses </li>
                                <li> Streets </li>
                                <li> Churches </li>
                                <li> Subdivisions </li>
                                <li> Parking Lots </li>
                            </ul>
                        </div>
                </div>

                {/* <div className="asphalt-section2">
                    <h2 className="asphalt-header2"> Asphalt Services </h2>
                    <ul>
                        <li> New Asphalt Driveways, Streets & Parking Lots </li>
                        <li> Asphalt Overlays </li>
                        <li> Striping </li>
                        <li> Asphalt Repairs & Patchwork </li>
                        <li> Asphalt Seal Coating </li>
                        <li> Asphalt Curbs & Wheel Bumpers </li>
                    </ul>
                </div> */}
            </div>
        )
    }
}

export default Asphalt;