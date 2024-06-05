"use client";

import React from "react";

const Features: React.FC = () => {
  return (
    <>
      <div className="features-area pt-100 pb-75">
        <div className="container">
          <div className="features-inner-content mb-5">
            <h2 className="text-center">Domain Experiences</h2>
          </div>
          <ul className="features-boxes-list">
            <li
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="features-list-box">
                <div className="icon">
                  {/* <i className="ri-smartphone-line"></i> */}
                  <i className="ri-luggage-cart-line"></i>
                </div>
                <h3>Retail & Ecommerce</h3>
              </div>
            </li>

            <li
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="features-list-box">
                <div className="icon bg2">
                  {/* <i className="ri-award-line"></i> */}
                  <i className="ri-restaurant-2-line"></i>
                </div>
                <h3>Food & Hospitality</h3>
              </div>
            </li>

            <li
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="features-list-box">
                <div className="icon bg3">
                  {/* <i className="ri-fingerprint-line"></i> */}
                  <i className="ri-refund-2-line"></i>
                </div>
                <h3>Finance & Marketing</h3>
              </div>
            </li>

            <li
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="features-list-box">
                <div className="icon">
                  {/* <i className="ri-vip-diamond-fill"></i> */}
                  <i className="ri-hospital-line"></i>
                </div>
                <h3>Health & Fitness</h3>
              </div>
            </li>

            <li
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <div className="features-list-box">
                <div className="icon bg4">
                  {/* <i className="ri-customer-service-2-line"></i> */}
                  <i className="ri-government-line"></i>
                </div>
                <h3>E-Governance</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Features;
