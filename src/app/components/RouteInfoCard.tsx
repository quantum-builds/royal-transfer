import { ArrowRightBlack, CircleArrowRight, MarkBlack } from "@/assets";
import Image from "next/image";

interface RouteInfoCardProps {
  from: string;
  to: string;
  isMark?: boolean;
}
export default function RouteInfoCard({
  isMark = false,
  from,
  to,
}: RouteInfoCardProps) {
  return (
    <div className="w-full bg-white text-black flex  justify-between gap-5 px-5 py-6 rounded-lg border-1 hover:border-[#a4c4f0] border-[white] cursor-pointer">
      {isMark && (
        <Image src={MarkBlack} alt="Circle Arrow" width={24} height={24} />
      )}
      <div className="flex gap-3">
        <p className="min-w-[150px] text-3xl">{from.toUpperCase()}</p>
        <Image
          src={ArrowRightBlack}
          alt="Arrow Right Icon"
          width={24}
          height={24}
        />

        <p className="text-3xl">{to.toUpperCase()}</p>
      </div>
      <Image src={CircleArrowRight} alt="Circle Arrow" width={24} height={24} />
    </div>
  );
}
