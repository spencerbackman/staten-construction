import React from 'react';
import './scss/footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <a className="footer-contact" href="https://www.google.com/maps/place/Staten+Construction/@33.7936579,-89.8502632,17z/data=!3m1!4b1!4m5!3m4!1s0x8881cd54ff741ff1:0x2ba73464ef726eb1!8m2!3d33.7936535!4d-89.8480745" target="_blank" rel="noopener noreferrer"><i class="fas fa-home"></i> 200 Houston Rd, Grenada, Ms 38901 </a> 
                <a className="footer-contact" href="tel:6622266097"><i class="fas fa-phone"></i> (662) 226-6097 </a> 
                <a className="footer-contact" href="mailto:statenconstruction@yahoo.com"> <i class="far fa-envelope"></i> statenconstruction@yahoo.com </a>
            </div>
        )
    }
}

export default Footer;