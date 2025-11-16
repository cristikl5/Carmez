import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../ui/Button";

const HeroSection = () => {
  const swiperRef = useRef<any>(null);

  const slides = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
  ];

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Swiper
      onSwiper={swiper => (swiperRef.current = swiper)}
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          allowTouchMove: true,
        },
        768: {
          allowTouchMove: true,
        },
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
              if (
                target.closest(".hero-pagination") ||
                target.closest(".hero-nav-button")
              ) {
                e.preventDefault();
              }
            }}
            aria-label="Cumpară aici - Linella"
          />
        </SwiperSlide>
      ))}
      <div className="hero-pagination flex items-center justify-center gap-2 md:gap-3 absolute bottom-3 md:bottom-5 left-0 right-0 z-10"></div>
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 hero-nav-button hidden md:block">
        <Button
          size="lg"
          variant="icon"
          onClick={handlePrev}
          className="!p-3 md:!p-4"
        >
          <ChevronLeft size={36} />
        </Button>
      </div>
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 hero-nav-button hidden md:block">
        <Button
          size="lg"
          variant="icon"
          onClick={handleNext}
          className="!p-3 md:!p-4"
        >
          <ChevronRight size={36} />
        </Button>
      </div>
    </Swiper>
  );
};

export default HeroSection;
