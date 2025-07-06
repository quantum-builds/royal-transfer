import {
  ComfortCar,
  EconomyCar,
  HondaCity,
  NissanGT,
  SportCar,
  SuvCar,
  SuzukiSwift,
  Toyota,
} from "@/assets";
import RouteInfoCard from "../RouteInfoCard";
import CarCard from "../CarCard";

const ROUTES = [
  { from: "Wapda Town", to: "DHA phase 3" },
  { from: "Iqbal Town", to: "DHA phase 3" },
  { from: "Wapda Town", to: "DHA phase 3" },
];
const CAR_TYPE = [
  { carImage: EconomyCar, carName: "Economy" },
  { carImage: ComfortCar, carName: "Comfort" },
  { carImage: SuvCar, carName: "SUV" },
  { carImage: SportCar, carName: "Sport" },
];
const CARS_AVAILABLE = [
  {
    carImage: HondaCity,
    carName: "Honda City",
    carOwner: "John ded",
    carRating: 4.5,
  },
  {
    carImage: SuzukiSwift,
    carName: "Suzuki Swift",
    carOwner: "Jane doe",
    carRating: 4.0,
  },
  {
    carImage: Toyota,
    carName: "Toyota",
    carOwner: "Mike Smith",
    carRating: 4.2,
  },
  {
    carImage: NissanGT,
    carName: "Nisaan GT",
    carOwner: "Alice Johnson",
    carRating: 4.8,
  },
];
export default function RidePlanSection() {
  return (
    <section className="h-[100vh] bg-top-car-gradient flex justify-center items-center ">
      <div className="h-3/4 flex items-center justify-between  md:w-11/12 xl:w-10/12 mx-auto">
        <div className="flex justify-center items-center h-11/12  w-3/7">
          <div className=" flex flex-col gap-10 w-full">
            <h2 className="text-5xl ">
              <span className="text-[#F9B424]">PLAN YOUR NEXT RIDE</span> -
              WHERE DO YOU WANT TO GO?
            </h2>
            {ROUTES.map((route, index) => (
              <RouteInfoCard
                key={index}
                isMark={true}
                from={route.from}
                to={route.to}
              />
            ))}
          </div>
        </div>

        <div className="bg-cars-card-gradient h-full flex justify-center rounded-b-xl w-[50%] ">
          <div className="h-11/12 p-5 bg-white rounded-xl flex flex-col gap-6 w-11/12">
            <div className="h-1/2 ">
              <CarCard title="Car type" cars={CAR_TYPE} />
            </div>
            <div className="h-1/2 ">
              <CarCard title="250+ Car Available" cars={CARS_AVAILABLE} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
