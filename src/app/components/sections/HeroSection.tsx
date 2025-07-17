import { HeroBG, TaxiHero } from "@/assets";
import NavBar from "../NavBar";
import Image from "next/image";
import LocationQuoteForm from "../LocationQouteForm";
import { Suspense } from "react";
import LocationQuoteFormSkeleton from "../LocationQuoteFormSkeleton";

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          className="w-full h-full object-cover"
          src={HeroBG}
          alt="hero background"
        />
        <div className="absolute inset-0 bg-hero-gradient"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <NavBar />

        <div className="flex-1/2" />

        <div className="md:w-11/12 xl:w-10/12 mx-auto flex justify-between items-start pb-24 h-full">
          <Suspense fallback={<LocationQuoteFormSkeleton />}>
            <LocationQuoteForm />
          </Suspense>

          <div className="flex w-3/5 items-end justify-start h-full">
            <Image
              src={TaxiHero}
              alt="hero image"
              className="hidden md:block w-4/5 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
