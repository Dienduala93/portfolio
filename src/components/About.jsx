import React from 'react';
import "./about.css";
const About = () => {
    return (
        <div className="row">
            <div className="about col-md-6">
                <h1>
                    ABOUT
            </h1>
                <p className="text-justify">
                    My name is <strong>Dienduala Marta Miguel </strong>
                    I'm an IT engineer, I like to work in a team, I am a fast learner. I like databases a lot.
            </p>
                <div className="row">
                    <div className="col-md-12 col-sm-6 ">
                        <h4>Basic Info</h4>
                        <ul className="list-unstyled footer">
                            <li>Nationality:<strong> Angolan</strong></li>
                            <li>Languages:<strong> Portuguese, English, Spanish</strong></li>
                            <li>Age:<strong>{new Date().getFullYear() - 1993}</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-6 ">
                <div className="row justify-content-center">
                    <div className="card shadow">
                        <img src={`${process.env.PUBLIC_URL}/marta.jpg`} alt="Avatar" />
                        
                    </div>

                </div>
  
            </div>

        </div>
        
    );
}

export default About;
