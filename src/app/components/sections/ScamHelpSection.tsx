import { AudiCarScam, TucsonCarBonus } from "@/assets";
import Image from "next/image";
import ScamHelpDropDown from "../ScamHelpDropDown";
import Button from "../Button";

const SCAM_HELP_CARDS = [
  {
    title: "Trust, Safety and Transparency.",
    description:
      "Your safety is our priority. With verified profiles, driver ratings and passenger reviews, you can trust the Go community. Share your ride with confidence, knowing that you’re in good hands with follow travelers.",
    readMoreLink: "/",
  },
  {
    title: "Stay Safe from Scams.",
    description:
      "Your safety is our priority. With verified profiles, driver ratings and passenger reviews, you can trust the Go community. Share your ride with confidence, knowing that you’re in good hands with follow travelers.",
    readMoreLink: "/",
  },
  {
    title: "Affordable Travel for Everyone.",
    description:
      "Your safety is our priority. With verified profiles, driver ratings and passenger reviews, you can trust the Go community. Share your ride with confidence, knowing that you’re in good hands with follow travelers.",
    readMoreLink: "/",
  },
];

export default function ScamHelpSection() {
  return (
    <section className="h-[95vh] flex justify-center items-center bg-top-car-gradient ">
      <div className="h-9/12 flex justify-center items-center gap-20 w-11/12">
        <div className="flex-1 h-full flex flex-col gap-10 ">
          <h2 className="text-5xl ">
            <span className="text-[#F9B424]">HELP US</span> KEPP YOU SAVE FROM
            SCAMS AND FRAUD
          </h2>
          <ScamHelpDropDown cardData={SCAM_HELP_CARDS} />
        </div>
        <div className="flex-1 flex flex-col gap-3 relative h-full ">
          <p className="text-lg text-[#283543B2]">
            At Go, we’re working hard to make our platform as secure as it can
            be. But when scams do happen, we want you to know exactly how to
            avoid and report them.
          </p>
          <Button text="Learn more" />
          <Image src={AudiCarScam} alt="Tucson Car Bonus" />
        </div>
      </div>
    </section>
  );
}
