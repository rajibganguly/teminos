"use client";

import React from "react";

const TopFeatures: React.FC = () => {
  return (
    <>
      <div className="features-area pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="features-box-card">
                <div className="icon">
                  {/* <i className="ri-smartphone-line"></i> */}
                  {/* <i className="ri-lightbulb-flash-line"></i> */}
                  <i className="ri-p2p-line"></i>
                </div>
                <h3>Idea exchange</h3>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="features-box-card">
                <div className="icon bg2">
                  {/* <i className="ri-award-line"></i> */}
                  <i className="ri-calendar-todo-line"></i>
                </div>
                <h3>Plan with prototype</h3>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="features-box-card">
                <div className="icon">
                  {/* <i className="ri-fingerprint-line"></i> */}
                  <i className="ri-bar-chart-2-line"></i>
                </div>
                <h3>Regular updated progress</h3>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-3 col-sm-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="features-box-card">
                <div className="icon bg2">
                  {/* <i className="ri-vip-diamond-line"></i> */}
                  <i className="ri-user-settings-line"></i>
                </div>
                <h3>Post delivery support</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFeatures;
