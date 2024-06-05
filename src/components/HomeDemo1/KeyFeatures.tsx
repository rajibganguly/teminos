"use client";

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
        const filteredData = data.filter(
          (feature) => feature.id >= 10 && feature.id <= 15
        );
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
    <>
      <div className="features-area ptb-100 bg-F7F7FF">
        <div className="container">
          <div className="section-title">
            <h2>Most Probably Included Best Features Ever</h2>
          </div>

          <div className="row justify-content-center">

            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="col-xl-4 col-lg-6 col-sm-6 col-md-6 mb-3"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={`${(index + 1) * 100}`}
                data-aos-once="true"
              >
                <div className="single-features-item">
                  <div className="icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
