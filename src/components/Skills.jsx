import React, { Fragment } from 'react';
import "./skills.css";
const Skills = () => {
    return (
        <Fragment>
            <h1>
                SKILLS
            </h1>
            <div className="row">
                <h2 className="w-100 ml-3">LIBRARIES</h2>
                <div className="col-md-4">
                    <div className="card1">
                        <div className="progress">
                            <div className="progress-bar bg-danger" style={{ width: "40%" }} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">40%</div>
                        </div>
                        <div className="container">
                            <h4><b>BOOTSTRAP</b></h4>
                           
                        </div>
                    </div>
                </div>
                
                {/*<div className="col-md-4">
                    <div className="card1">
                        <div className="progress">
                            <div className="progress-bar bg-info" style={{ width: "75%" }} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">75%</div>
                        </div>
                        <div className="container">
                            <h4><b>JQuery</b></h4>
                            
                        </div>
                    </div>
                </div>*/}
             {/*<div className="col-md-4">
                    <div className="card1">
                        <div className="progress">
                            <div className="progress-bar bg-success" style={{ width: "60%" }} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">60%</div>
                        </div>
                        <div className="container">
                            <h4><b>REACT JS</b></h4>
            
                        </div>
                    </div>
            </div>*/}
            </div>

            <div className="row">
                <h2 className="w-100 ml-3">LANGUAGES</h2>
                <div className="col-md-4">
                    <div className="card1">
                        <div className="progress">
                            <div className="progress-bar bg-info" style={{ width: "30%" }} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">30%</div>
                        </div>
                        <div className="container">
                            <h4><b>JAVASCRIPT</b></h4>
                            
                        </div>
                    </div>
                </div>
              {/*<div className="col-md-4">
                    <div className="card1">
                        <div className="progress">
                            <div className="progress-bar bg-warning" style={{ width: "55%" }} role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
                        </div>
                        <div className="container">
                            <h4><b>JAVA</b></h4>
                        </div>
                    </div>
                </div>*/}
                <div className="col-md-4">
                    <div className="card1">
                        <div className="progress">
                            <div className="progress-bar bg-danger" style={{ width: "30%" }} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">30%</div>
                        </div>
                        <div className="container">
                            <h4><b>PHP</b></h4>
                
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="row">
                <h2 className="w-100 ml-3">DATABASE</h2>
                <div className="col-md-4">
                    <div className="card1">
                        <div className="progress">
                            <div className="progress-bar bg-success" style={{ width: "45%" }} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">45%</div>
                        </div>
                        <div className="container">
                            <h4><b>MYSQL</b></h4>

                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card1">
                        <div className="progress">
                            <div className="progress-bar bg-danger" style={{ width: "55%" }} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">55%</div>
                        </div>
                        <div className="container">
                            <h4><b>POSTGRESQL</b></h4>

                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <h2 className="w-100 ml-3">TOOLS</h2>
                <div className="col-md-4">
                    <div className="card1">
                        <div className="progress">
                            <div className="progress-bar bg-success" style={{ width: "30%" }} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">30%</div>
                        </div>
                        <div className="container">
                            <h4><b>GIT & GITHUB</b></h4>

                        </div>
                    </div>
                </div>

            </div>

        </Fragment>
    );
}

export default Skills;
