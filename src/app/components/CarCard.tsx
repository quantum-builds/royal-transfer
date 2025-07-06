import Image, { StaticImageData } from "next/image";

interface TCarType {
  carImage: StaticImageData;
  carName: string;
}
interface TcarAvailable {
  carImage: StaticImageData;
  carName: string;
  carOwner: string;
  carRating: number;
}
interface CarCardProps {
  title: string;
  cars: TCarType[] | TcarAvailable[];
}
export default function CarCard({ title, cars }: CarCardProps) {
  return (
    <div className="bg-[#F2F8FF] h-full w-full p-3 rounded-xl flex flex-col gap-2">
      <h3 className="w-full text-center text-3xl">{title.toUpperCase()}</h3>
      <div className="flex-1 flex gap-3 ">
        {cars.map((car, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between w-full"
          >
            <div className="h-full bg-car-card-gradient w-full rounded-xl flex justify-center">
              <Image
                src={car.carImage}
                alt={`${car.carName} image`}
                width={180}
                height={80}
              />
            </div>
            <p className="text-xl">{car.carName.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
