import React from 'react';
import "./projects.css"
import { Fragment } from 'react';

const Projects = () => {
    return (
        <Fragment>
            <h1 className="text-justify">MY PROJECTS</h1>
            <div className="container">


                <div className="row">

                    <div className="col-md-4 product-grid shadow">
                        <div className="image">
                            <a href={"https://github.com/Dienduala93/clone-netflix"} rel="noopener noreferrer" target={"_blank"}>

                                <img src={`${process.env.PUBLIC_URL}/netflixClone.png`} alt={"pessoa"} className="card-img-top img-fluid" />
                                <div className="overlay">
                                    <div className="detail">A Simple App made with html,css and js.</div>
                                </div>
                            </a>
                        </div>
                        <h5 className="text-center">Netflix Clone</h5>
                        <a href={"https://github.com/Dienduala93/clone-netflix/"} rel="noopener noreferrer" target={"_blank"} className="btn buy">Go To Project</a>
                    </div>
                    {/*   segundo projecto*/}
                  {/*<div className="col-md-4 product-grid shadow">
                        <div className="image">
                            <a href={"https://play.google.com/store/apps/details?id=com.bumba.app.io&hl=es_PE"} rel="noopener noreferrer" target={"_blank"}>

                                <img src={`${process.env.PUBLIC_URL}/bumbaapp.png`} alt={"bumba"} className="card-img-top img-fluid" />
                                <div className="overlay">
                                    <div className="detail">Bumba is an application for the hiring of professionals for the execution of services in Angola.</div>
                                </div>
                            </a>
                        </div>
                        <h5 className="text-center">Bumba App</h5>
                        <a href={"https://play.google.com/store/apps/details?id=com.bumba.app.io&hl=es_PE"} rel="noopener noreferrer" target={"_blank"} className="btn buy">Go To Project</a>
    </div>*/}
                    {/*   terceiro projecto*/}
                   {/*<div className="col-md-4 product-grid shadow">
                        <div className="image">
                            <a href={"http://abakaxi.co.ao/"} rel="noopener noreferrer" target={"_blank"}>

                                <img src={`${process.env.PUBLIC_URL}/abakaxi.png`} alt={"abakaxi"} className="card-img-top img-fluid" />
                                <div className="overlay">
                                    <div className="detail">Mini Market based in Angola. The website is for advertising and on-line shopping</div>
                                </div>
                            </a>
                        </div>
                        <h5 className="text-center">Minimercado Abakaxi</h5>
                        <a href={"http://abakaxi.co.ao/"} rel="noopener noreferrer" target={"_blank"} className="btn buy">Go To Project</a>
</div>*/}
                </div>
            </div>

        </Fragment>
    );
}

export default Projects;
