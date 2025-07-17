"use client";

import { HeroBG, TaxiHero } from "@/assets";
import NavBar from "../NavBar";
import Image from "next/image";
import LocationQuoteForm from "../LocationQouteForm";
import { Suspense, useEffect, useState } from "react";
import LocationQuoteFormSkeleton from "../LocationQuoteFormSkeleton";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      setScrolled(heroBottom <= 80); // 80px is a safe buffer for nav height
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        {/* Pass scroll state */}
        <NavBar scrolled={scrolled} />

        <div className="flex-1/2" />

        <div className="md:w-11/12 xl:w-10/12 mx-auto flex justify-between items-start lg:gap-0 xl:gap-6 lg:pb-8 2xl:pb-4 h-full">
          <Suspense fallback={<LocationQuoteFormSkeleton />}>
            <LocationQuoteForm />
          </Suspense>

          <div className="flex w-3/5 h-full items-end justify-center">
            <Image
              src={TaxiHero}
              alt="hero image"
              className="hidden md:block h-auto max-h-full lg:w-full  object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
