import { StaticImageData } from "next/image";
import { StarRating } from "./StarRating";
import Image from "next/image";
import { LargeSeatIcon, PassengerIcon, SmallSeatIcon } from "@/assets";

interface CarTypesCardProps {
  type: string;
  star: number;
  carImage: StaticImageData;
  noOfPassengers: number;
  noOfLargeSeats: number;
  noOfSmallSeats: number;
}
export default function CarTypesCard({ ...props }: CarTypesCardProps) {
  return (
    <div className="w-full  bg-white px-5 lg:px-3 xl:px-5 py-6 flex md:gap-10 lg:gap-2 2xl:gap-6 justify-between rounded-xl text-black">
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl xl:text-[40px] bebas-neue leading-none ">
          {props.type}
        </h3>
        <StarRating rating={props.star} />
        <Image
          src={props.carImage}
          alt={`${props.carImage}-image`}
          className="w-52 h-52 lg:w-40 lg:h-40 xl:w-52 xl:h-52"
        />
      </div>
      <div className="flex flex-col gap-4 be-vietnam-pro text-xl">
        <div className="flex gap-1">
          <Image
            src={PassengerIcon}
            alt="Passenger Icon"
            width={24}
            height={24}
          />
          <span>{props.noOfPassengers} Passengers</span>
        </div>
        <div className="flex gap-1">
          <Image
            src={LargeSeatIcon}
            alt="Large Seat Icon"
            width={24}
            height={24}
          />
          <span>{props.noOfLargeSeats} Large</span>
        </div>
        <div className="flex gap-1">
          <Image
            src={SmallSeatIcon}
            alt="Small Seat Icon"
            width={24}
            height={24}
          />
          <span>{props.noOfSmallSeats} Small</span>
        </div>
      </div>
    </div>
  );
}
