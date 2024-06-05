import React from "react";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";
// import MainBanner from "@/components/HomeDemo7/MainBanner";
import MainBanner from "@/components/HomeDemo8/MainBanner";
import BestFeatures from "@/components/HomeDemo8/BestFeatures";
import TopFeatures from "@/components/HomeDemo8/TopFeatures";
import AboutContent from "@/components/HomeDemo8/AboutContent";
// import AppScreenshots from "@/components/HomeDemo8/AppScreenshots";
import AppIntroVideo from "@/components/HomeDemo8/AppIntroVideo";
import Funfacts from "@/components/HomeDemo8/Funfacts";
import AppDownload from "@/components/HomeDemo8/AppDownload";
import ClientFeedback from "@/components/HomeDemo8/ClientFeedback";
import PricingPlan from "@/components/HomeDemo8/PricingPlan";
import BlogPost from "@/components/Common/BlogPost";
import PartnerStyle2 from "@/components/Common/PartnerStyle2";
import FooterStyleThree from "@/components/Layouts/FooterStyleThree";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import KeyFeatures from "@/components/HomeDemo8/KeyFeatures";
import BestAppEver from "@/components/HomeDemo7/BestAppEver";
import Features from "@/components/HomeDemo3/Features";
import SoftwareIntegrations from "@/components/HomeDemo7/SoftwareIntegrations";
import AppProgress from "@/components/HomeDemo7/AppProgress";
import BestFeatures2 from "@/components/HomeDemo8/BestFeatures2";
import FeaturesCardStyle2 from "@/components/Features/FeaturesCardStyle2";

export default function Home() {
  return (
    <>
      <NavbarStyleTwo />

      <MainBanner />
      
      <BestAppEver />
      <TopFeatures />
      {/* <AboutContent /> */}
      {/* <BestFeatures2 /> */}
      <Features />
      <KeyFeatures />
      <AppProgress />
      <FeaturesCardStyle2 />
      {/* <AppScreenshots /> */}

      {/* <AppIntroVideo /> */}

      {/* <Funfacts /> */}

      {/* <AppDownload /> */}
      <SoftwareIntegrations />
      {/* <ClientFeedback /> */}

      {/* <PricingPlan /> */}

      {/* <div className="bg-f9f9f9">
        <PartnerStyle2 />
      </div> */}

      {/* <BlogPost /> */}

      <FooterStyleOne />
    </>
  );
}
