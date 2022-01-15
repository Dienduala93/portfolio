import React from 'react';
import { Fragment } from 'react';
import {Link} from "react-router-dom"
import "./home.css";

const Home = () => {
    return (
        <Fragment>
            <div className="home jumbotron bg-white col-md-12 p-0 container-fluid">
               
                <div className="container">
                    <h1 className="mt-5">
                        <p>Hi,</p>
                        <p>I am Dienduala</p>
                        <p>Front End Developer</p>
                    </h1>
                    
                    <Link to="/about">
                        <button>More Info</button>
                    </Link>
                </div>
                
            </div>
            <div className="row">
               
            </div>
            <div className="row"></div>
            
        </Fragment>
     
    );
}

export default Home;
