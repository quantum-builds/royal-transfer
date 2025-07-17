import RouteInfoCard from "../RouteInfoCard";

const ROUTES = [
  { from: "Wapda Town", to: "DHA phase 3" },
  { from: "Iqbal Town", to: "DHA phase 3" },
  { from: "Wapda Town", to: "DHA phase 3" },
  { from: "Wapda Town", to: "DHA phase 3" },
  { from: "Wapda Town", to: "DHA phase 3" },
  { from: "Wapda Town", to: "DHA phase 3" },
  { from: "Wapda Town", to: "DHA phase 3" },
  { from: "Wapda Town", to: "DHA phase 3" },
  { from: "Wapda Town", to: "DHA phase 3" },
];
export default function TopCarDestinationSection() {
  return (
    <section className=" h-[70vh] mt-8 bg-top-car-gradient">
      <div className=" h-10/12 md:w-11/12 xl:w-10/12 mx-auto flex flex-col gap-10 justify-center items-center ">
        <div className="flex  justify-between">
          <h2 className="text-5xl ">
            DISCOVER OUT TOP{" "}
            <span className="text-[#F9B424]">CAR DESTINATION</span> FOR YOU
          </h2>
          <div className="flex flex-col gap-3">
            <p className="text-lg text-[#283543B2]">
              Discover popular routes to towns with our top car destinations.
              Whether it’s weekend getaway or a daily commute, we offer
              comfortable and affordable travel options to suit your needs.
              Start your journey with us today!
            </p>
            {/* <Button text="See more" /> */}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 w-full">
          {ROUTES.map((route, index) => (
            <RouteInfoCard from={route.from} to={route.to} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
