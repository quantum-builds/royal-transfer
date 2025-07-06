import { TucsonCarBonus } from "@/assets";
import Image from "next/image";
import { title } from "process";
import { deserialize } from "v8";
import CarPoolCard from "../CarPoolCard";

const CARPOOL_REWARDS = [
  {
    title: "Earn Rs. 40 in Carpool Rewards!",
    description:
      "Drivers, your eco-friendly efforts are paying off! Enjoy a Rs 40 bonus when you carpool. Check out the eligibility criteria and start earning today!",
    readMoreLink: "/",
  },
  {
    title: "Get Rewarded with Carpool Bonuses!",
    description:
      "Good news for drivers! you can earn a Rs. 40 bonus just by sharing your ride. Carpool and benefit from this exclusive offer. Terms apply.",
    readMoreLink: "/",
  },
];
export default function CarPoolSection() {
  return (
    <section className="h-[90vh] flex justify-center items-center gap-5">
      <div className="h-9/12 flex justify-center items-center w-11/12">
        <div className="flex-1 relative h-full  flex items-center ">
          <Image src={TucsonCarBonus} alt="Tucson Car Bonus" />
        </div>
        <div className="flex-1 h-full flex flex-col gap-5 ">
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl ">
              <span className="text-[#F9B424]">ENJOY A RS.40</span> CARPOOL
              BONUS FOR SHARING YOUR RIDE!
            </h2>
            <p className="text-lg text-[#283543B2]">
              Drivers great news your good habits are being rewarded Benefit
              from the Carpool Bonus bt carpooling. See eligibility conditions.
            </p>
          </div>
          <div className="flex-1 flex gap-6">
            {CARPOOL_REWARDS.map((reward, index) => (
              <CarPoolCard
                title={reward.title}
                description={reward.description}
                readMoreLink={reward.readMoreLink}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
