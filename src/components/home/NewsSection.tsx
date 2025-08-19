import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../ui/Button";
import HomeNewsCard from "./HomeNewsCard";

const news = [
  {
    title: "Retele clasice la masa de Pasti. Din 1904.",
    buttonText: "Cumpara aici",
    bgImage: "/images/home-news/carnaciori-1.jpg",
  },
  {
    title: "Retele clasice la masa de Pasti. Din 1904.",
    buttonText: "Cumpara aici",
    bgImage: "/images/home-news/carnaciori-2.jpg",
  },
  {
    title: "Retele clasice la masa de Pasti. Din 1904.",
    buttonText: "Cumpara aici",
    bgImage: "/images/home-news/carnaciori-3.jpg",
  },
  {
    title: "Retele clasice la masa de Pasti. Din 1904.",
    buttonText: "Cumpara aici",
    bgImage: "/images/home-news/carnaciori-3.jpg",
  },
  {
    title: "Retele clasice la masa de Pasti. Din 1904.",
    buttonText: "Cumpara aici",
    bgImage: "/images/home-news/carnaciori-3.jpg",
  },
];

const NewsSection = () => {
  const swiperRef = useRef<any>(null);

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
    <section className="py-10 overflow-visible news-section bg-white">
      <div className="fluid-container">
        <h2 className="text-center font-medium text-[32px] font-barlow text-dark">
          Noutăți
        </h2>
      </div>
      <div className="swiper-container mt-8 overflow-visible">
        <Swiper
          onSwiper={swiper => (swiperRef.current = swiper)}
          modules={[Navigation]}
          spaceBetween={32}
          slidesPerView="auto"
          centeredSlides={false}
          loop={true}
          className="overflow-visible"
          style={{ overflow: "visible" }}
        >
          {news.map(item => (
            <SwiperSlide key={item.bgImage} className="overflow-visible">
              <HomeNewsCard
                bgImage={item.bgImage}
                title={item.title}
                buttonText={item.buttonText}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="fluid-container">
        <div className="flex items-center justify-center mt-8 gap-1">
          <Button variant="icon" onClick={handlePrev}>
            <ArrowLeft size={18} />
          </Button>
          <Button variant="icon" onClick={handleNext}>
            <ArrowRight size={18} />
          </Button>
        </div>
        <div className="flex items-center justify-center mt-8">
          <Button variant="outline" className="text-sm md:text-base">
            Vezi toate
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
