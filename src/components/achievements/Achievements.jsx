import "./achievements.css";
import { Data } from "./Data";
// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Achievements = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">Achievements</h2>
      <span className="section__subtitle">Highlights from my journey</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        speed={800}
        autoplay={{
          delay: 4000, // 3 seconds
          disableOnInteraction: false, // keeps autoplay running after user interaction
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {Data.map(({ id, icon, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <i className={`${icon} achievement__icon`} aria-hidden="true"></i>
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Achievements;
