import React from 'react';
import './scss/about.scss';

class About extends React.Component {
    render() {
        return (
            <div id="about-page">
                <div className="about-section">
                    <h1 className="about-header"> About Double S Inc. </h1>
                    <div className="about-header-underline"></div>
                    <p className="about-par"> 
                        Double S, Inc. (also known as Staten Construction) is a family owned and operated business.  Through God's leadership and blessings, 
                        Double S, Inc. has grown into a trusted and dependable construction company.  Since our start in 1990, God has blessed us in serving 
                        the Grenada area in its construction needs. 
                    </p>
                    <p className="about-par">
                        At Double S, Inc. we will continue to honor and serve God through all of our jobs and services.  We will Strive to run our company with 
                        Christian standards and by God's will. 
                    </p>
                </div>
                <div className="about-image-holder"></div>
                <div className="about-section2">
                    <div className="about-section2-inner">
                        <h4 className="about-header4"> MISSION & VALUES </h4>
                        <div className="about-header4-underline"></div>
                        <h2 className="about-header2"> Company Goal </h2>
                        <p className="about-par2">
                            Our company goals are to establish a long term relationship with our customers by providing quality work at a competitive price & to be a trusted, 
                            dependable contractor who can give a guaranteed price & quality work.  We will achieve these goals through a team of experienced employees & the 
                            necessary equipment to do a quality job.
                        </p>
                        <h2 className="about-header2"> Company Policy </h2>
                        <p className="about-par2">
                            When you call us with a construction or asphalt need, we will meet with you and devise a comprehensive plan to meet those needs.  This plan 
                            will show how we will do the work, when we will do the work and give you a guaranteed price for the work.  All of this will be done at 
                            <strong> NO OBLIGATION & FREE OF CHARGE. </strong>  
                        </p>
                    </div>
                </div>
                {/* <div className="about-section">
                    <h2 className="about-header2"> Contact: </h2>
                    <h4 className="about-header4"> Robby Staten ~ Owner </h4>
                    <ul>
                        <li> <strong> Email: </strong> <a href="mailto:statenconstruction@yahoo.com"> statenconstruction@yahoo.com </a> </li>
                        <li> <strong> Phone: </strong> 662.226.6097 </li>
                        <li> <strong> Fax: </strong> 229.0884 </li>
                        <li> <strong> Address: </strong> 200 Houston Road, Grenada, Ms 38901 </li>
                    </ul>
                </div> */}
            </div>
        )
    }
}

export default About;