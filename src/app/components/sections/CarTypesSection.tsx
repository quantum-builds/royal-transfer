import { EconomyCar, EstateCar, ExecutiveCar, MpvCar } from "@/assets";
import CarTypesCard from "../CarTpesCard";

const CAR_TYPES = [
  {
    type: "ECONOMY",
    star: 4,
    carImage: EconomyCar,
    noOfPassengers: 3,
    noOfLargeSeats: 2,
    noOfSmallSeats: 1,
  },
  {
    type: "ESTATE",
    star: 5,
    carImage: EstateCar,
    noOfPassengers: 4,
    noOfLargeSeats: 4,
    noOfSmallSeats: 0,
  },
  {
    type: "EXECUTIVE",
    star: 5,
    carImage: ExecutiveCar,
    noOfPassengers: 3,
    noOfLargeSeats: 2,
    noOfSmallSeats: 2,
  },
  {
    type: "MPV",
    star: 5,
    carImage: MpvCar,
    noOfPassengers: 5,
    noOfLargeSeats: 3,
    noOfSmallSeats: 2,
  },
  {
    type: "MINIBUS",
    star: 5,
    carImage: MpvCar,
    noOfPassengers: 8,
    noOfLargeSeats: 8,
    noOfSmallSeats: 0,
  },
];

export default function CarTypesSection() {
  return (
    <section className="h-[100vh] flex justify-center items-center bg-[#F9F9F9] poppins">
      <div className="h-9/12 flex flex-col justify-between items-center gap-5 md:w-11/12 xl:w-10/12 mx-auto">
        <div className="flex items-start gap-5 w-full h-2/3">
          <div className="flex-1 flex flex-col gap-6 ">
            <h2 className="text-[64px] text-black uppercase bebas-neue leading-none">
              Car Types <span className="text-yellow">Available </span>
            </h2>
            <p className="text-xl text-gray w-11/12">
              Various car types available for rides include economy, Estate,
              Executive, MVP and Minibus, catering to different passenger needs
              and preferences. These options ensure comfort, affordability, and
              style for all travelers.
            </p>
          </div>
          {CAR_TYPES.slice(0, 2).map((option, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col item-end h-full w-full"
            >
              <div className="flex-1/3"></div>
              <CarTypesCard
                type={option.type}
                star={option.star}
                carImage={option.carImage}
                noOfPassengers={option.noOfPassengers}
                noOfLargeSeats={option.noOfLargeSeats}
                noOfSmallSeats={option.noOfSmallSeats}
              />
            </div>
          ))}
        </div>
        <div className="flex  items-center gap-5 w-full">
          {CAR_TYPES.slice(2).map((option, index) => (
            <CarTypesCard
              key={index}
              type={option.type}
              star={option.star}
              carImage={option.carImage}
              noOfPassengers={option.noOfPassengers}
              noOfLargeSeats={option.noOfLargeSeats}
              noOfSmallSeats={option.noOfSmallSeats}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
