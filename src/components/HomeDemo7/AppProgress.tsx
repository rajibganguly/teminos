"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AppProgress: React.FC = () => {
  return (
    <>
      <div className="new-app-progress-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="new-app-progress-content">
                {/* <div className="big-text">Progress</div> */}
                {/* <span className="sub-title">APP PROGRESS</span> */}
                <h2>Set Up The Challenges and Track Your Progress</h2>
                <p>
                  Navigate challenges effortlessly with our advanced progress tracking solutions. From identifying obstacles to setting clear goals, our platform offers real-time monitoring and customizable metrics for accurate evaluation. Foster collaboration, automate reporting, and anticipate future trends with predictive analysis. Drive continuous improvement while ensuring data security across devices. Streamline your progress tracking process and stay ahead with our comprehensive software solutions.
                </p>

                <Link href="/contact" className="default-btn">
                  Get Started
                </Link>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="new-app-progress-image text-center">
                <Image
                  src="/images/home-7-8-9/progress/progress.png"
                  alt="app-img"
                  width={815}
                  height={588}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="new-app-progress-shape">
          <Image
            src="/images/home-7-8-9/progress/shape-1.png"
            alt="image"
            width={87}
            height={101}
          />
        </div>
      </div>
    </>
  );
};

export default AppProgress;
