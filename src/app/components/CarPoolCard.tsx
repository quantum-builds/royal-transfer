import Link from "next/link";

interface CarPoolCardProps {
  title: string;
  description: string;
  readMoreLink: string;
}
export default function CarPoolCard({
  title,
  description,
  readMoreLink,
}: CarPoolCardProps) {
  return (
    <div className="w-full h-full bg-[#F0F6FE] p-5 flex flex-col rounded-xl">
      <div className="flex-1/3 "></div>
      <div className="flex-2/3 flex flex-col justify-between gap-2">
        <p className="text-3xl">{title.toUpperCase()}</p>
        <p className="text-[#283543B2] text-lg">{description}</p>
        <Link
          className="text-2xl text-[#0B6AF0] underline cursor-pointer text-end"
          href={readMoreLink}
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
}
