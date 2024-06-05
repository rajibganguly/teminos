"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchData } from "@/api/feature";

const KeyFeatures: React.FC = () => {

  const [features, setFeatures] = useState<IFeature[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getFeatures = async () => {
      try {
        const data = await fetchData();
        const filteredData = data.filter((feature) => feature.id <= 6);
        setFeatures(filteredData);
      } catch (err) {
        // setError("Failed to load features. Please try again later.");
      } finally {
        // setLoading(false);
      }
    };
    getFeatures();
  }, []);

  // if (loading) {
  //   return <div className="loading-screen">Loading...</div>;
  // }

  // if (error) {
  //   return <div className="error-message">{error}</div>; // Display error message
  // }

  return (
    <div className="key-features-area bg-transparent-with-color pt-100 pb-100">
      <div className="container">
        <div className="section-title">
          <h2>Effective Solutions for You</h2>
        </div>

        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="col-xl-4 col-lg-6 col-md-6 mb-3"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={`${(index + 1) * 100}`}
              data-aos-once="true"
            >
              <div className={`key-features-card ${index % 2 === 1 ? 'bg-color-two' : ''} style-two`}>
                <div className={`icon ${index % 2 === 1 ? 'bg2' : ''}`}>
                  <i className={feature.icon}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="key-features-btn">
          <Link href="/services" className="default-btn">
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
