"use client";

import React, { useEffect, useState } from "react";
import { fetchData } from "@/api/feature";

const ServicesCard: React.FC = () => {
  const [features, setFeatures] = useState<IFeature[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getFeatures = async () => {
      try {
        const data = await fetchData();
        const filteredData = data.filter((feature) => feature.id <= 9);
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
    <div className="features-area pt-100 pb-75">
      <div className="container">
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div key={feature.id} className="col-lg-4 col-6 col-md-6 xsw-100">
              <div className="features-item">
                <div className={`icon ${index % 2 === 1 ? 'bg2' : 'bg3'}`}>
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
  );
};

export default ServicesCard;
