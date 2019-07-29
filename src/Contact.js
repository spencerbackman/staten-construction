import React from 'react';
import map from './images/map.png';
import './scss/contact.scss';

class Contact extends React.Component {
    render() {
        return (
            <div id="contact-page">
                <div className="contact-container">
                    <h1 className="contact-header"> CONTACT US </h1>
                    <div className="contact-header-underline"></div>
                    <p className="contact-par"> 
                        When you contact us with an asphalt need, we will meet with you and devise a comprehensive plan to meet those needs. 
                        This plan will show how we will do the work, when we will do the work and give you a guaranteed price for the work. 
                        All of this will be done at no obligation and FREE of charge. 
                    </p>
                    <p className="contact-par"> 
                        You may contact us in a variety of ways, including filling in our form to let us know how we can help you. You may 
                        choose to be detailed about your needs or simply ask us to contact you.
                    </p>
                    <form id="formContainer" action="https://formspree.io/steve@wemakeads.com" method="POST">
                        <div className="contactRow">
                            <label htmlFor="form_name" className="form_label">  Name* </label>
                            <input type="text" name="name" className="input" />
                        </div>
                        <div className="contactRow">
                            <label htmlFor="form_number" className="form_label"> Phone* </label>
                            <input type="tel" name="phone" className="input" />
                        </div>
                        <div className="contactRow">
                            <label htmlFor="form_email" className="form_label"> Email* </label>
                            <input type="text" name="email" className="input" />
                        </div>
                        <div className="contactRow">
                            <label htmlFor="form_message" className="form_label"> Comments* </label>
                            <textarea type="text" name="message" className="message_input" />
                        </div>
                        <div className="contactRow">
                            <button id="form-button"><i className="far fa-paper-plane"></i> SEND </button>
                        </div>
                    </form>

                </div>
                <div className="contact-info-section">
                    <h4 className="contact-header4"> You may also contact us at </h4>
                    <div className="contact-row">
                        <ul>
                            <li> <strong> Email: </strong> statenconstruction@yahoo.com </li>
                            <li> <strong> Phone: </strong> 662.226.6097 </li>
                            <li> <strong> Fax: </strong>  229.0884 </li>
                            <li> <strong> Address: </strong> 200 Houston Road, Grenada Ms, 38901 </li>
                        </ul>
                        <img src={map} className="map" alt="Double S Inc Map"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;