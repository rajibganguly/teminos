import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import PrivacyPolicyContent from "@/components/PrivacyPolicy/PrivacyPolicyContent";
import PageBannerStyle2 from "@/components/Common/PageBannerStyle2";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle2
        pageTitle="Privacy Policy"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privacy Policy"
      />

      <PrivacyPolicyContent />

      <FooterStyleOne />
    </>
  );
}
