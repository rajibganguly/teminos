"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AppProgressStyle4: React.FC = () => {
  return (
    <>
      <div className="app-progress-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="app-progress-image text-center">
                <Image
                  src="/images/app/app-img2.png"
                  alt="app-img"
                  width={720}
                  height={583}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-progress-content">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AppProgressStyle4;
