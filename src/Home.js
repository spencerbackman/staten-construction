import React from 'react';
import logo from './images/dbsl.png';
import mixer from './images/icons/mixer.svg';
import sitePrep from './images/icons/sitePrep.svg';
import flat from './images/icons/flat.svg';
import mixer2 from './images/icons/mixer2.svg';
import subDiv from './images/icons/subDivision.svg';
import utilities from './images/icons/utilities.svg';
import abcMs from './images/ABC-MS_Logo.png';
import dnb from './images/logo-dnb.svg';
import demolition from './images/icons/demolition.svg';
import overlay from './images/icons/road-perspective.svg';
import { Link } from 'react-router-dom';
import './scss/home.scss';

class Home extends React.Component {
     render() {
         return (
            <div id="home-page">
                <div className="top-container">
                    <div className="home-header-container">
                        <img src={logo} className="header-logo" alt="Double S, Inc"/>
                        <h1 className="main-header"> We are a complete site preparation contractor </h1>
                        <h2 className="main-header2"> Doing business as Staten Contruction </h2>
                    </div>
                </div>
                <div className="home-service-row">
                    <div className="home-service-column">
                        <h2 className="home-main-header"> Welcome to Double S Inc. </h2>
                        <p className="home-main-par"> Double S, Inc., also known as Staten Construction, is a complete site preparation contractor serving the Grenada and North Mississippi area. 
                            We are a leading contractor in Grenada and North Mississippi area for excavation, dirt work, asphalt, concrete, driveways, parking lots, subdivisions, utilities, 
                            and much more. <br/> <br/>
                            We invite you to browse our web site to see samples of the quality work we do on asphalt overlays, demolition and repairs, site preparation, concrete, parking lots, 
                            utilities, and subdivisions. 
                        </p>
                    </div>
                </div>

                <div className="service-section" id="home-services">
                    <h2 className="main-header3"> Our Services </h2>
                    <div className="header2-underline"></div>
                    <div className="service-container">
                        <Link className="service-holder" to="/site-preparation">
                            <img src={sitePrep} className="home-icon" alt="Site Preperation"/>
                            <div className="service-text-holder">
                                <h3 className="service-header"> Site Preparation </h3>
                                <p className="service-par"> Staten Construction will perform necessary excavations & compaction to put your site on finish grade as a architect or engineer plans show. </p>
                            </div>
                        </Link>
                        <Link className="service-holder" to="/concrete">
                            <img src={mixer} className="home-icon" alt="Concrete"/>
                            <div className="service-text-holder">
                                <h3 className="service-header"> Concrete </h3>
                                <p className="service-par"> Staten Construction can build you a sidewalk or pour a slab for your foundation. </p>
                            </div>
                        </Link>
                        <Link className="service-holder" to="/parking-lots">
                            <img src={flat} className="home-icon" alt="Parking Lots"/>
                            <div className="service-text-holder">
                                <h3 className="service-header"> Parking Lots </h3>
                                <p className="service-par"> 
                                    Staten Construction can reshape your existing parking lot or build you a new parking lot from start to finish. 
                                </p>
                            </div>
                        </Link>
                        <Link className="service-holder" to="/asphalt">
                            <img src={mixer2} className="home-icon" alt="Asphalt"/>
                            <div className="service-text-holder">
                                <h3 className="service-header"> Asphalt </h3>
                                <p className="service-par"> 
                                    Staten Construction can build a new street or driveway or overlay an old one. 
                                </p>
                            </div>
                        </Link>
                        <Link className="service-holder" to="/asphalt-overlay">
                            <img src={overlay} className="home-icon" alt="Asphalt Overlay"/>
                            <div className="service-text-holder">
                                <h3 className="service-header"> Asphalt Overlay </h3>
                                <p className="service-par">
                                    If you have potholes, ruts, or low areas that hold water. We will come and locate any weakness repair them and overlay your existing asphalt.
                                </p>
                            </div>
                        </Link>
                        <div className="service-holder">
                            <img src={subDiv} className="home-icon" alt="Subdivision"/>
                            <div className="service-text-holder">
                                <h3 className="service-header"> Subdivision </h3>
                                <p className="service-par"> 
                                    Staten Contruction can lay out new subdivisions 
                                </p>
                            </div>
                        </div>
                        <div className="service-holder">
                            <img src={utilities} className="home-icon" alt="Utilities"/>
                            <div className="service-text-holder">
                                <h3 className="service-header"> Utilities </h3>
                                <p className="service-par"> 
                                    We can install sanitary sewers, storm sewers, waterlines, and other necessary utility work. 
                                </p>
                            </div>
                        </div>
                        <Link className="service-holder" to="/demolition-and-repairs">
                            <img src={demolition} className="home-icon" alt="Demolition & Repairs"/>
                            <div className="service-text-holder">
                                <h3 className="service-header"> Demolition & Repairs </h3>
                                <p className="service-par">
                                    We are equipped to handle any demolitions & repairs you need.
                                </p>
                            </div>
                        </Link>
                        <Link className="service-holder" to="/seal-coatings">
                            <img src="" alt=""/>
                            <div className="service-text-holder">
                                <h3 className="service-header"> Seal Coatings </h3>
                                <p className="service-par">
                                    Applying a seal coat will protect and extend the life of asphalt. We highly recommend seal coating your asphalt for longevity and reduced maintenance costs.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="home-promise-section">
                    <h2 className="main-header3"> Our promise to you </h2>
                    <div className="home-promise-header-underline"></div>
                    <p className="home-promise-par">
                        When you call us with construction needs, we will meet with you and devise a comprehensive plan to meet those needs. This plan will show how we will do the work, 
                        when we will do the work, and will give us a guaranteed price for the work. All this will be done at <strong>no obligation & free </strong> of charge.
                    </p>
                    <p className="home-par"> If it has to do with DIRT, Staten Construction is the company you need to call. </p>
                    <p className="home-par-small"> We are licensed & insured. </p>
                    <p className="home-par-small"> Free Estimates </p>
                    <p className="home-par-small"> We accept Credit Cards </p>
                    <div className="home-row">
                        <div className="home-column">
                            <img src={abcMs} className="home-img" alt="Associated Builders and Contractors Mississippi"/>
                            <p className="home-par-small"> We are proud members of the Mississippi Association of Builders and Contractors. </p>  
                        </div>
                        <div className="home-column">
                            <img src={dnb} alt="Dun & Bradstreet verification"/>
                            <p className="home-par-small"> We are Dun & Bradstreet verified. </p>
                        </div>
                    </div>
                </div>
            </div>
         )
     }
} 

export default Home;