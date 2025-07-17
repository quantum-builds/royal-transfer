import CarTypesSection from "./components/sections/CarTypesSection";
import FooterSection from "./components/sections/FooterSection";
import HeroSection from "./components/sections/HeroSection";
import RidePickingSection from "./components/sections/RidePickingSection";
import MultipleLocationSection from "./components/sections/MultipleLocationSection";
import RidePickingSectionSkeleton from "./components/sections/RidePickingSectionSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<RidePickingSectionSkeleton />}>
        <RidePickingSection />
      </Suspense>
      {/* <HowItWorksSection /> */}
      {/* <WhyChooseSection /> */}
      {/* <LookingForTaxiSection /> */}
      <CarTypesSection />
      <MultipleLocationSection />
      {/* <ScamHelpSection /> */}
      {/* <CarPoolSection /> */}
      {/* <RidePlanSection /> */}
      {/* <TopCarDestinationSection /> */}
      <FooterSection />
    </>
  );
}
