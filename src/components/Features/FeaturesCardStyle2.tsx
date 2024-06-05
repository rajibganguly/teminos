"use client";
import React, { useEffect, useState } from "react";
import { technologyData } from "@/api/technology";

const FeaturesCardStyle2: React.FC = () => {
  const [technology, setTechnology] = useState<ITechnology[]>([]);

  useEffect(() => {
    const getTechnology = async () => {
      try {
        const data = await technologyData();
        setTechnology(data);
      } catch (err) {
        // setError("Failed to load features. Please try again later.");
      } finally {
        // setLoading(false);
      }
    };
    getTechnology();
  }, []);

  return (
    <>
      <div className="features-area pt-100 pb-75">
        <div className="container">
          <div className="features-inner-content mb-5">
            <h2 className="text-center">Technology Index</h2>
            <p className="text-center">
              A quality experience team with more than 8 years experience.
            </p>
          </div>
          <div className="row justify-content-center">
            {technology.map((tech) => (
              <div
                key={tech.id}
                className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100 mb-3"
              >
                <div className="single-features-box">
                  <div className={`icon ${tech.id % 4 === 3 ? "bg3" : tech.id % 4 === 0 ? "bg4" : tech.id % 4 === 2 ? "bg2" : ""}`}>
                    <i className={tech.icon}></i>
                  </div>
                  <h3>{tech.title}</h3>
                  <p className="text-center">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesCardStyle2;