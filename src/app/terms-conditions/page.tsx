import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import TermsConditionsContent from "@/components/TermsConditions/TermsConditionsContent";
import PageBannerStyle2 from "@/components/Common/PageBannerStyle2";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle2
        pageTitle="Terms & Conditions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Terms & Conditions"
      />


      <TermsConditionsContent />

      <FooterStyleOne />
    </>
  );
}
