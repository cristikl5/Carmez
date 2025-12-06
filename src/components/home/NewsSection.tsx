import { newsData } from "@/data/newsData";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../ui/Button";
import HomeNewsCard from "./HomeNewsCard";

const NewsSection = () => {
  const swiperRef = useRef<any>(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Get news based on current language
  const currentNews = newsData[i18n.language === "ru" ? "ru" : "ro"];

  // Map news items to HomeNewsCard props
  const news = currentNews.map(newsItem => ({
    title: newsItem.title,
    buttonText: t("home.news.items.buttonText"),
    bgImage: newsItem.image,
    onClick: () => navigate(`/news/${newsItem.slug}`),
  }));

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
        <h2 className="text-center text-4xl md:text-[56px] font-semibold font-barlow text-dark">
          {t("home.news.title")}
        </h2>
      </div>
      <div className="swiper-container mt-8 overflow-visible">
        <Swiper
          onSwiper={swiper => (swiperRef.current = swiper)}
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          className="overflow-visible"
          style={{ overflow: "visible" }}
          breakpoints={{
            // Mobile: Strict 1 slide per view with centered slides
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
              centeredSlides: true,
            },
            // Tablet: Show 1.5 slides per view
            768: {
              slidesPerView: 1.5,
              spaceBetween: 24,
              centeredSlides: false,
            },
            // Desktop: Auto slides with full spacing
            1024: {
              slidesPerView: "auto",
              spaceBetween: 32,
              centeredSlides: false,
            },
          }}
        >
          {news.map(item => (
            <SwiperSlide key={item.title} className="overflow-visible">
              <HomeNewsCard
                bgImage={item.bgImage}
                title={item.title}
                buttonText={item.buttonText}
                onClick={item.onClick}
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
          <Button
            variant="outline"
            className="text-sm md:text-base"
            onClick={() => navigate("/news")}
          >
            {t("home.news.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
