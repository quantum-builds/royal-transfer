import { CarVector, FlashVector, HandMoneyVector } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const WORK_DATA = [
  {
    title: "Trust who you travel with.",
    image: CarVector,
    description:
      "we take the time to get to know each of our members and partners. we check reviews, profiles and ID’s, so you know who you’re traveling with and can book.",
    readMoreLink: "/",
  },
  {
    title: "Your pick of rides at low prices.",
    image: HandMoneyVector,
    description:
      "No matter where you’re going, by carpool find the perfect ride from our wide range of destinations and routes at low prices..",
    readMoreLink: "/",
  },
  {
    title: "Scroll, click tap and go!",
    image: FlashVector,
    description:
      "Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.",
    readMoreLink: "/",
  },
];
export default function HowItWorksSection() {
  return (
    <section className="h-[95vh] flex justify-center items-center bg-top-car-gradient ">
      <div className="h-9/12 flex flex-col justify-between items-center gap-20 md:w-11/12 xl:w-10/12 mx-auto">
        <div className="flex flex-col gap-6 justify-center items-center text-center">
          <h2 className="text-5xl ">
            HOW IT
            <span className="text-[#F9B424]"> WORKS</span>
          </h2>
          <p className="text-lg text-[#283543B2] w-1/3">
            Drivers post their trips, passengers find rides, and together they
            split costs. Search for available journeys, connect with drivers or
            passengers, and hit the road. It’s affordable, convenient and
            eco-friendly!
          </p>
        </div>
        <div className="flex justify-between gap-10 w-full">
          {WORK_DATA.map((item, index) => (
            <div key={index} className="flex flex-col gap-8 p-6 text-center">
              <div className="border-2 w-fit mx-auto border-[#F9B424] rounded-full p-4 flex justify-center items-center ">
                <Image
                  src={item.image}
                  alt={`${item.title} image`}
                  className="w-12 h-12 mx-auto"
                />
              </div>

              <div className="flex flex-col gap-5 ">
                <div className="flex flex-col gap-5 h-48">
                  <h3 className="text-3xl ">{item.title.toUpperCase()}</h3>
                  <p className="text-lg text-[#283543B2] ">
                    {item.description}
                  </p>
                </div>
                <Link
                  className="text-2xl text-[#0B6AF0] underline cursor-pointer  "
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
