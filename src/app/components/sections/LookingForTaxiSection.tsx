import { DollarVector, FilterVector, StarVector } from "@/assets";
import Image from "next/image";

const WORK_DATA = [
  {
    title: "Free waiting time",
    image: FilterVector,
    description:
      "Enjoy a complimentary waiting period before your ride begins, making your experience more relaxed.",
  },
  {
    title: "No hidden charges",
    image: DollarVector,
    description:
      "Enjoy your ride with transparent pricing no hidden charges. Travel with confidence, knowing all costs are clear upfront.",
  },
  {
    title: "Experienced Drivers",
    image: StarVector,
    description:
      "Our Experienced drivers in ride services ensure passenger safety and comfort with their skilled navigation and local knowledge.",
  },
];
export default function LookingForTaxiSection() {
  return (
    <section className="h-[70vh] flex justify-center items-center poppins">
      <div className="h-9/12 flex flex-col justify-between items-center gap-10 md:w-11/12 xl:w-10/12 mx-auto">
        <div className="flex flex-col gap-6 justify-center items-center text-center">
          <h2 className="text-[64px] bebas-neue text-black uppercase leading-none">
            <span className="text-yellow">Looking for a Taxi </span>
            Near you?
          </h2>
          <p className="text-lg text-gray w-2/5">
            Need a quick and dependable taxi service nearby? We&apos;re here to
            provide you with fast, safe, and convenient transportation whenever
            you need it.
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

              <div className="flex flex-col gap-5 ">
                <div className="flex flex-col gap-5 h-32">
                  <h3 className="text-[36px] text-black uppercase bebas-neue leading-none">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray ">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </section>
  );
}
