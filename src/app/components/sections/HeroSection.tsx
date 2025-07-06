import { HeroBG, TaxiHero } from "@/assets";
import NavBar from "../NavBar";
import Image from "next/image";
import LocationQuoteForm from "../LocationQouteForm";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
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

        <div className="flex-1/2 md:w-11/12 xl:w-10/12 mx-auto flex justify-between items-start pb-12">
          <LocationQuoteForm />
          <div className=" relative flex h-full w-3/5 items-end">
            <Image
              src={TaxiHero}
              alt="hero image"
              className="hidden md:block w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
