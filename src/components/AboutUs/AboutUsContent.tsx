"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                {/* <span className="sub-title">ABOUT US</span> */}
                <h2>Most Probably You Are Getting Best Services Ever</h2>
                <p>
                  Teminos provides a broad portfolio of information technology solutions and business process to its clients worldwide. Our core portfolio comprises application development, business process consulting services as well as professional staffing services in information-technology.
                </p>

                <div className="features-text">
                  <h6>Mission Statement</h6>
                  <p>
                    Teminos is committed to bring the best software experience to consumers around the world through its innovative and creative software developments and solutions.
                  </p>
                </div>

                <div className="features-text">
                  <h6>The Building Blocks</h6>
                  <p>
                    Unique Customer oriented Product ideas, Relentless focus and Dedicated team for R&D.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="about-img"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <Image
                  src="/images/app/app-img8.png"
                  alt="about"
                  width={732}
                  height={727}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
