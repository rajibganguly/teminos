"use client";

import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <>
      <div className="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.7093629171573!2d88.43143697514466!3d22.96092841862617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89511c3dc6bcf%3A0xae0ad2d365b459ea!2zV2ViZWwgSVQgUGFyayBQaGFzZSAyIOCmk-Cmr-CmvOCnh-CmrOCnh-CmsiDgpqTgpqXgp43gpq_gpqrgp43gprDgpq_gp4HgppXgp43gpqTgpr8g4KaJ4Kam4KeN4Kav4Ka-4KaoIOCmpuCnjeCmrOCmv-CmpOCngOCnnw!5e0!3m2!1sen!2sin!4v1717438915296!5m2!1sen!2sin" loading="lazy"></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
