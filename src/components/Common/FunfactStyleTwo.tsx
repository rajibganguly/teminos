"use client";

import React from "react";

const FunfactStyleTwo: React.FC = () => {
  return (
    <>
      <div className="funfacts-area ptb-100">
        <div className="container">
          <div className="row justify-content-center m-0">
            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
              <div className="funfacts-box mb-0">
                <div className="icon">
                  <i className="ri-global-line"></i>
                </div>
                <p>Clients Worldwide</p>
                <h3>
                  43<span className="sign">+</span>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
              <div className="funfacts-box bg1 mb-0">
                <div className="icon">
                  <i className="ri-todo-line"></i>
                </div>
                <p>Projects Completed</p>
                <h3>
                  89<span className="sign">+</span>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
              <div className="funfacts-box bg2 mb-0">
                <div className="icon">
                  <i className="ri-presentation-line"></i>
                </div>
                <p>In Business</p>
                <h3>
                  8<span className="sign">+</span> Years
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
              <div className="funfacts-box bg3 mb-0">
                <div className="icon">
                  <i className="ri-team-line"></i>
                </div>
                <p>Team Members</p>
                <h3>
                  40<span className="sign">+</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunfactStyleTwo;
