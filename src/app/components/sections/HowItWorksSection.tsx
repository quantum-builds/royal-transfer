import {
  CarVector,
  LocationPinYellowVector,
  RideConfidenceVector,
} from "@/assets";
import Image from "next/image";
import Link from "next/link";

const WORK_DATA = [
  {
    title: "Pick your location",
    image: LocationPinYellowVector,
    description:
      "Pick a destination and we’ll provide you a taxi in the best Price.",
    readMoreLink: "/",
  },
  {
    title: "Choose your ride",
    image: CarVector,
    description:
      "Choose a car that suit your needs All licensed, high quality drivers.",
    readMoreLink: "/",
  },
  {
    title: "Ride with confidence",
    image: RideConfidenceVector,
    description:
      "Drivers and their cab providers independently rated by customers",
    readMoreLink: "/",
  },
];
export default function HowItWorksSection() {
  return (
    <section className="h-[85vh] flex justify-center items-center poppins">
      <div className="h-9/12 flex flex-col justify-between items-center gap-20 md:w-11/12 xl:w-10/12 mx-auto">
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <h2 className="text-[64px] text-black bebas-neue ">
            HOW IT
            <span className="text-yellow"> WORKS</span>
          </h2>
          <p className="text-lg text-gray w-2/5">
            Book your ride via our website, choose your preferred ride option,
            and enjoy a safe, comfortable journey — all with just a few taps and
            pay easily after your trip via cash or card.
          </p>
        </div>
        <div className="flex justify-between gap-10 w-full">
          {WORK_DATA.map((item, index) => (
            <div key={index} className="flex flex-col gap-8 p-6 text-center">
              <div className="border-2 w-fit mx-auto border-yellow rounded-full p-4 flex justify-center items-center ">
                <Image
                  src={item.image}
                  alt={`${item.title} image`}
                  className="w-12 h-12 mx-auto"
                />
              </div>

              <div className="flex flex-col gap-3 ">
                <div className="flex flex-col gap-3 h-32">
                  <h3 className="text-[36px] text-black uppercase bebas-neue">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray ">{item.description}</p>
                </div>
                <Link
                  className="text-2xl text-yellow underline cursor-pointer bebas-neue"
                  href={item.readMoreLink}
                >
                  READ MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </section>
  );
}
