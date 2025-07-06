import {
  AppStoreIcon,
  CopyRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  Logo,
  PlayStoreIcon,
  TwitterIcon,
  ArrowRightWhite,
} from "@/assets";
import Image from "next/image";

const ROUTES = [
  { from: "Wapda Town", to: "DHA phase 3" },
  { from: "Iqbal Town", to: "DHA phase 3" },
  { from: "Wapda Town", to: "DHA phase 3" },
  { from: "Wapda Town", to: "DHA phase 3" },
  { from: "Wapda Town", to: "DHA phase 3" },
  { from: "Wapda Town", to: "DHA phase 3" },
];
export default function FooterSection() {
  return (
    <footer className="bg-footer-gradient h-[65vh] text-white flex flex-col justify-center">
      <div className="h-10/12 md:w-11/12 xl:w-10/12 mx-auto flex flex-col justify-center items-center ">
        <div className=" h-2/3 flex justify-between gap-16">
          <div className="flex-[30%] flex flex-col gap-8">
            <Image
              src={Logo}
              alt="Royal Transfer Logo"
              width={120}
              height={48}
            />
            <p className="text-lg">
              Share the cost, and reduce your carbon footprint Whether you’re
              planning a weekend getaway or a daily commute, ride-sharing makes
              every trip better for you and the planet.
            </p>
            <div className="flex gap-8">
              <Image
                src={InstagramIcon}
                alt="Instagram Icon"
                width={32}
                height={32}
              />
              <Image
                src={FacebookIcon}
                alt="Facebook Icon"
                width={32}
                height={32}
              />
              <Image
                src={TwitterIcon}
                alt="Twitter Icon"
                width={32}
                height={32}
              />
              <Image
                src={LinkedInIcon}
                alt="LinkedIn Icon"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div className="flex-[20%] flex flex-col  gap-8 text-lg ">
            <h3 className="mb-4 text-4xl">HOW TO TRAVEL</h3>
            <p>All Carpool Routes</p>
            <p>All Carpool Destinations</p>
          </div>
          <div className="flex-[30%] flex flex-col gap-12 text-lg">
            <h3 className="mb-4 text-4xl">All Carpool Destinations</h3>
            <div className="flex flex-col gap-1">
              {ROUTES.map((route, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <p className="min-w-[100px]">{route.from}</p>
                  <Image
                    src={ArrowRightWhite}
                    alt="Arrow Right Icon"
                    width={24}
                    height={24}
                  />
                  <p>{route.to}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-[20%] flex flex-col gap-8">
            <h3 className="mb-4 text-4xl">Download App</h3>
            <Image
              src={AppStoreIcon}
              alt="App Store Icon"
              width={150}
              height={50}
            />
            <Image
              src={PlayStoreIcon}
              alt="Play Store Icon"
              width={150}
              height={50}
            />
          </div>
        </div>
      </div>
      <>
        <div className="bg-white h-[1px] w-full"></div>
        <div className="h-2/12 md:w-11/12 xl:w-10/12 mx-auto flex justify-between items-center  text-lg">
          <div className="flex gap-5">
            <p>Terms and Conditions</p>
            <p>Cookies Settings</p>
          </div>
          <div className="flex gap-3">
            <p>Gocar,2024</p>
            <Image
              src={CopyRightIcon}
              alt="Copyright Icon"
              width={20}
              height={16}
            />
          </div>
        </div>
      </>
    </footer>
  );
}
