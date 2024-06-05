"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BestAppEver: React.FC = () => {
  return (
    <>
      <div className="app-ever-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="app-ever-image">
                <Image
                  src="/images/home-7-8-9/app-ever/app-ever.png"
                  alt="image"
                  width={817}
                  height={727}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-ever-content">
                <h2>Creating advanced software solutions, a tech innovator</h2>
                <p>
                  Established in 2016, Teminos Technology is a leading IT firm blending established and emerging technologies to create scalable software solutions. With 40+ dedicated employees across 8+ countries, we offer premier services to diverse clients.
                </p>
                <ul className="list">
                  <li>
                    <div className="icon bg2">
                      {/* <i className="ri-download-cloud-2-line"></i> */}
                      <i className="ri-shake-hands-line"></i>
                    </div>
                    <h3>Commitment</h3>
                    <p>
                      We're not just vendors; committed partners in your project's success. Sharing expertise, tailoring solutions, ensuring mutual growth.
                    </p>
                  </li>

                  <li>
                    <div className="icon">
                      {/* <i className="ri-award-line"></i> */}
                      <i className="ri-search-eye-line"></i>
                    </div>
                    <h3>Transparency</h3>
                    <p>
                      Your project's vision is paramount. We prioritize your involvement at every stage to ensure clarity and tailored delivery align with your expectations.
                    </p>
                  </li>

                  <li>
                    <div className="icon bg2">
                      {/* <i className="ri-cloud-line"></i> */}
                      <i className="ri-shuffle-line"></i>
                    </div>
                    <h3>Flexibility</h3>
                    <p>
                      Recognizing that your concept evolves as development progresses, with Teminos, rest assured your well-considered alterations are seamlessly integrated into development cycles.
                    </p>
                  </li>
                </ul>

                {/* <div className="btn-box">
                  <Link href="/app-download" className="default-btn">
                    Start Free Trial
                  </Link>
                  <Link href="/features" className="link-btn">
                    See All Features
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="app-ever-shape-1">
          <Image
            src="/images/home-7-8-9/app-ever/shape-1.png"
            alt="image"
            width={94}
            height={116}
          />
        </div>
      </div>
    </>
  );
};

export default BestAppEver;
