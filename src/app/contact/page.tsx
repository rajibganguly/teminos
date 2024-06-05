import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";
import PageBannerStyle2 from "@/components/Common/PageBannerStyle2";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle2
        pageTitle="Contact Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact Us"
      />

      <ContactForm />

      <ContactInfo />

      <FooterStyleOne />
    </>
  );
}
