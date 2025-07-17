"use client";

import { StaticImageData } from "next/image";
import { StarRating } from "./StarRating";
import Image from "next/image";
import {
  LargeSeatIcon,
  OneWay,
  PassengerIcon,
  SmallSeatIcon,
  TwoWay,
} from "@/assets";
import { useState } from "react";

interface RideOptionCardProps {
  type: string;
  star: number;
  carImage: StaticImageData;
  noOfPassengers: number;
  noOfLargeSeats: number;
  noOfSmallSeats: number;
  oneWayPrice: number;
  roundTripPrice: number;
}
export default function RideOptionCard({ ...props }: RideOptionCardProps) {
  const [tourType, setTourType] = useState<"one-way" | "two-way">("one-way");

  return (
    <div className="w-full bg-[#F8F8F8] px-5 lg:px-3 xl:px-5 py-10 flex md:gap-10 lg:gap-2 2xl:gap-10 justify-between rounded-xl">
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl xl:text-[40px] bebas-neue leading-none text-black">
          {props.type}
        </h3>
        <StarRating rating={props.star} />
        <Image
          src={props.carImage}
          alt={`${props.carImage}-image`}
          className="w-52 h-52 lg:w-40 lg:h-40 xl:w-52 xl:h-52"
        />
      </div>
      <div className="flex flex-col gap-4 be-vietnam-pro text-black">
        <div className="flex gap-1">
          <Image
            src={PassengerIcon}
            alt="Passenger Icon"
            width={24}
            height={24}
          />
          <span className="text-[#283543]">
            {props.noOfPassengers} Passengers
          </span>
        </div>
        <div className="flex gap-1">
          <Image
            src={LargeSeatIcon}
            alt="Large Seat Icon"
            width={24}
            height={24}
          />
          <span className="text-[#283543]">{props.noOfLargeSeats} Large</span>
        </div>
        <div className="flex gap-1">
          <Image
            src={SmallSeatIcon}
            alt="Small Seat Icon"
            width={24}
            height={24}
          />
          <span className="text-[#283543]">{props.noOfSmallSeats} Small</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-8">
        <div className="flex flex-row lg:flex-col xl:flex-row  gap-3 items-center justify-center">
          <p className="text-2xl uppercase bebas-neue leading-none text-black">
            Trip type
          </p>
          <div className="flex  gap-3 items-center justify-center">
            <div
              className={`px-3 py-2 rounded-lg bg-[#283543] border-[1px]  cursor-pointer`}
              onClick={() => setTourType("one-way")}
            >
              <Image src={OneWay} alt="One Way Icon" width={10} height={10} />
            </div>
            <div
              className={`p-2 rounded-lg bg-white
             cursor-pointer border-[1px] border-[#D9D9D9]`}
              onClick={() => setTourType("two-way")}
            >
              <Image src={TwoWay} alt="Two Way Icon" width={20} height={20} />
            </div>
          </div>
        </div>
        {tourType === "one-way" ? (
          <div className="inline-flex flex-col gap-1 be-vietnam-pro text-black">
            <p className="text-xl  text-end font-semibold">
              Total One way Price
            </p>
            <p className="text-2xl text-end font-semibold">
              $ {props.oneWayPrice}.00
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-1 w-fit be-vietnam-pro text-black">
            <p className="text-xl  text-end font-semibold">
              Total Two way Price
            </p>
            <p className="text-2xl text-end font-semibold">
              $ {props.roundTripPrice}.00
            </p>
          </div>
        )}
        <button className="bg-blue text-white font-semibold px-8 lg:px-6 xl:px-8 py-3 rounded-full w-fit cursor-pointer poppins ">
          Confirm Ride
        </button>
      </div>
    </div>
  );
}
