import { useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSection = () => {
  const swiperRef = useRef<any>(null);

  const slides = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
  ];

  return (
    <Swiper
      onSwiper={swiper => (swiperRef.current = swiper)}
      modules={[Autoplay, Pagination]}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        el: ".hero-pagination",
        bulletClass: "hero-pagination-bullet",
        bulletActiveClass: "hero-pagination-bullet-active",
      }}
      className="hero-swiper min-h-screen w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <a
            href="https://linella.md/ro/carmez"
            target="_blank"
            rel="noopener noreferrer"
            className="block min-h-screen w-full bg-cover bg-center bg-no-repeat relative cursor-pointer"
            style={{
              backgroundImage: `url('${slide}')`,
            }}
            onClick={e => {
              const target = e.target as HTMLElement;
              if (target.closest(".hero-pagination")) {
                e.preventDefault();
              }
            }}
            aria-label="Cumpară aici - Linella"
          />
        </SwiperSlide>
      ))}
      <div className="hero-pagination flex items-center justify-center gap-2 md:gap-3 absolute bottom-3 md:bottom-5 left-0 right-0 z-10"></div>
    </Swiper>
  );
};

export default HeroSection;
