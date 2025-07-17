import {
  AliceWilsonImage,
  BakhamWillImage,
  BrainOCornerImage,
  JennyJersyImage,
  KristanWatsonImage,
  VenceDeisalImage,
} from "@/assets";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import Image from "next/image";
const TESTIMONIALS = [
  {
    name: "Kristan Watson",
    image: KristanWatsonImage,
    review:
      "The ride was smooth and exhilarating, leaving me with a great sense of thrill. The staff was friendly and attentive, making the experience even better. Overall, it was a fantastic experience I would highly recommend.",
    rating: 5,
  },
  {
    name: "Alice Wilson",
    image: AliceWilsonImage,
    review:
      "The ride was thrilling and fun, with breathtaking scenery all around. The staff was friendly and attentive, ensuring a safe experience. Overall, it was a memorable adventure I’d love to repeat.",
    rating: 4.5,
  },
  {
    name: "Jenny Jersy",
    image: JennyJersyImage,
    review:
      "The day exceeded all expectations, leaving me with lasting memories and a sense of fulfillment. I can't wait to share the story with friends and plan the next trip. Truly an experience to cherish forever.",
    rating: 5,
  },
  {
    name: "Brain O Corner",
    image: BrainOCornerImage,
    review:
      "The ride was smooth and exhilarating, leaving me with a great sense of thrill. The staff was friendly and attentive, making the experience even better. Overall, it was a fantastic experience I would highly recommend.",
    rating: 4.5,
  },
  {
    name: "Vence Deisal",
    image: VenceDeisalImage,
    review:
      "The ride was thrilling and fun, with breathtaking scenery all around. The staff was friendly and attentive, ensuring a safe experience. Overall, it was a memorable adventure I’d love to repeat.",
    rating: 5,
  },
  {
    name: "Bakham Wil",
    image: BakhamWillImage,
    review:
      "The day exceeded all expectations, leaving me with lasting memories and a sense of fulfillment. I can't wait to share the story with friends and plan the next trip. Truly an experience to cherish forever.",
    rating: 5,
  },
];
export default function TestimonialSection() {
  return (
    <section className="h-[85vh] flex justify-center items-center poppins">
      <div className="h-9/12 flex flex-col justify-between items-center gap-20 md:w-11/12 xl:w-10/12 mx-auto">
        <div className="flex flex-col gap-6 justify-center items-center text-center">
          <h2 className="text-[64px] bebas-neue text-black uppercase leading-none">
            Serving <span className="text-yellow">Multiple Localities</span>
          </h2>
          <p className="text-lg text-gray">
            Royal Transfers proudly serves towns, villages, and cities
            throughout the UK.
          </p>
        </div>

        <div className="overflow-hidden w-full">
          <Swiper
            spaceBetween={24}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            mousewheel={{ forceToAxis: true }}
            modules={[Autoplay, Pagination, Mousewheel]}
            className="w-full px-6"
          >
            {TESTIMONIALS.map((data, index) => (
              <SwiperSlide
                key={index}
                className="!w-[300px] md:!w-[500px] flex-shrink-0"
              >
                <div className="h-[310px] rounded-2xl bg-[#F3F3F3] flex items-end justify-center">
                  <div className="flex flex-col gap-2 mb-2">
                    <h3 className="text-black text-3xl font-semibold uppercase bebas-neue leading-none ml-4">
                      {data.name}
                    </h3>
                    <div className="w-[480px] h-[200px] relative mb-4">
                      <Image
                        src={data.image}
                        alt={data.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
