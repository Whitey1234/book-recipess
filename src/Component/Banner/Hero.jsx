// Hero.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Hero = () => {
  const slides = [
    {
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Discover Delicious Recipes"
    },
    {
      img: "https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&w=800",
      title: "Fresh Ingredients, Great Taste"
    },
    {
      img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Simple to Gourmet – Cook Anything!"
    }
  ];

  return (
    <div className="w-full min-h-[70vh] max-h-[70vh] overflow-hidden py-12 md:py-20">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3500 }}
        loop={true}
        slidesPerView={1}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative flex items-center justify-center h-[70vh]">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-[90%] h-[90%] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-5xl font-bold bg-black/50 px-6 py-3 rounded">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
