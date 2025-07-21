import CarTypesSection from "./components/sections/CarTypesSection";
import FooterSection from "./components/sections/FooterSection";
import HeroSection from "./components/sections/HeroSection";
import RidePickingSection from "./components/sections/RidePickingSection";
import MultipleLocationSection from "./components/sections/MultipleLocationSection";
import RidePickingSectionSkeleton from "./components/sections/RidePickingSectionSkeleton";
import { Suspense } from "react";
import TermsConditionSection from "./components/sections/TermsConditionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<RidePickingSectionSkeleton />}>
        <RidePickingSection />
      </Suspense>
      <CarTypesSection />
      <MultipleLocationSection />
      <TermsConditionSection />
      <FooterSection />
    </>
  );
}
