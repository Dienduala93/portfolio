import React, { Fragment } from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <Fragment>
            <footer>
                <div className="contactos">
                    <a href={"https://www.facebook.com/dienduala.miguel.5/"} rel="noopener noreferrer" target={"_blank"}><i className="fa fa-facebook-square fa-2x text-primary mr-2"></i></a>
                    <a href={"https://www.linkedin.com/in/dienduala-marta-miguel-30b3701b1/"} rel="noopener noreferrer" target={"_blank"}><i className="fa fa-linkedin-square fa-2x text-primary mr-2"></i> </a>
                    <a href={"https://github.com/Dienduala93"} rel="noopener noreferrer" target={"_blank"}><i className="fa fa-github fa-2x"></i></a>
                </div>
                
            </footer>
            
        </Fragment>
    );
}

export default Footer;
