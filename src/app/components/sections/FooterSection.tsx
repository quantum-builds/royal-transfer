import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  TwitterIcon,
  PhoneVector,
  MailVector,
  LocationVector,
  TikTokIcon,
} from "@/assets";
import Image from "next/image";
import EmailBox from "../EmailBox";

// const ROUTES = [
//   { from: "Wapda Town", to: "DHA phase 3" },
//   { from: "Iqbal Town", to: "DHA phase 3" },
//   { from: "Wapda Town", to: "DHA phase 3" },
//   { from: "Wapda Town", to: "DHA phase 3" },
//   { from: "Wapda Town", to: "DHA phase 3" },
//   { from: "Wapda Town", to: "DHA phase 3" },
// ];

const CONTACT_DETAILS = [
  { image: PhoneVector, text: "+4420 8004 9990" },
  {
    image: MailVector,
    text: "info@royaltransfers.co.uk",
  },
  {
    image: LocationVector,
    text: "450 bath road heathrow longford UB7 0EB",
  },
];

const LINKS = [
  { link: "/", text: "Car Types" },
  { links: "/", text: "Services" },
  { links: "/", text: "Cities" },
  { links: "/", text: "About" },
];

const SOCIAL_ICONS = [FacebookIcon, InstagramIcon, TwitterIcon, TikTokIcon];

export default function FooterSection() {
  return (
    <footer className="bg-blue lg:h-[700px]   text-white flex flex-col justify-center">
      <div className="h-11/12 md:w-11/12 xl:w-10/12 mx-auto flex flex-col justify-between items-center ">
        <div className=" flex flex-col  items-center gap-12">
          <Image src={Logo} alt="Royal Transfer Logo" width={150} height={60} />
          <h2 className="text-[64px] bebas-neue text-white uppercase leading-none">
            Your Journey Begins with Royal Transfers
          </h2>
        </div>

        <div className="flex w-full justify-between  gap-10">
          <div className="flex flex-col gap-8">
            <p className="bebas-neue leading-none text-4xl text-yellow uppercase">
              Contact Details
            </p>
            <div className="flex flex-col gap-6 poppins">
              {CONTACT_DETAILS.map((detail, index) => (
                <div key={index} className="flex gap-3">
                  <Image
                    src={detail.image}
                    alt="Contact Icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-lg 4xl:text-2xl">{detail.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden h-full xl:flex flex-col justify-between">
            <div className="flex lg:flex-col xl:flex-row gap-4 whitespace-nowrap ">
              {LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  className="text-lg 4xl:text-2xl be-vietnam-pro"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          <div className=" hidden lg:flex xl:hidden  flex-col justify-between ">
            <div className=" flex flex-col justify-between">
              <div className="flex gap-4 whitespace-nowrap">
                {LINKS.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="text-lg be-vietnam-pro"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col lg:gap-2  items-end justify-center poppins"></div>
            <EmailBox />
            <div className="flex justify-end gap-3">
              {SOCIAL_ICONS.map((icon, index) => (
                <Image
                  key={index}
                  src={icon}
                  alt={icon}
                  width={32}
                  height={32}
                />
              ))}
            </div>
          </div>
          <div className="hidden xl:flex flex-col gap-4 items-end justify-center poppins">
            <EmailBox />
            <div className="flex gap-3">
              {SOCIAL_ICONS.map((icon, index) => (
                <Image
                  key={index}
                  src={icon}
                  alt={icon}
                  width={32}
                  height={32}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="text-md 4xl:text-xl poppins">
          Copyright © 2025 Go Royal Transfers - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
