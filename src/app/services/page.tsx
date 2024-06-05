import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import AppDownloadStyle1 from "@/components/Common/AppDownloadStyle1";
import KeyFeatures from "@/components/HomeDemo1/KeyFeatures";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import ServicesCard from "@/components/Services/ServicesCard";
import PageBannerStyle2 from "@/components/Common/PageBannerStyle2";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle2
        pageTitle="Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
      />

      <ServicesCard />

      <KeyFeatures />

      {/* <div className="ptb-100">
        <AppDownloadStyle1 />
      </div> */}

      <FooterStyleOne />
    </>
  );
}
