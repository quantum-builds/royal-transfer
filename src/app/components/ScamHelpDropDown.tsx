"use client";
import Image from "next/image";
import { CircleArrowDown, CircleArrowUp } from "@/assets";
import { useState } from "react";
import Link from "next/link";

interface ScamHelpSectionProps {
  cardData: {
    title: string;
    description: string;
    readMoreLink: string;
  }[];
}

export default function ScamHelpDropDown({ cardData }: ScamHelpSectionProps) {
  const [isOpenIndex, setIsOpenIndex] = useState(-1);
  return (
    <div className="flex flex-col gap-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col gap-8 justify-between bg-white rounded-lg border-1 hover:border-[#a4c4f0] border-[white] px-5 py-6 "
        >
          <div
            className="w-full  text-black flex  justify-between gap-5 cursor-pointer"
            onClick={() => setIsOpenIndex(isOpenIndex === index ? -1 : index)}
          >
            <div className="flex flex-between items-center gap-5">
              <p className="text-3xl">{card.title.toUpperCase()}</p>
            </div>
            {isOpenIndex === index ? (
              <Image
                src={CircleArrowUp}
                alt="Circle Arrow"
                width={24}
                height={24}
              />
            ) : (
              <Image
                src={CircleArrowDown}
                alt="Circle Arrow"
                width={24}
                height={24}
              />
            )}
          </div>
          {isOpenIndex === index && (
            <>
              <p className="text-[#283543B2] text-lg w-11/12">
                {card.description}
              </p>
              <Link
                className="text-2xl text-[#0B6AF0] underline cursor-pointer "
                href={card.readMoreLink}
              >
                READ MORE
              </Link>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
