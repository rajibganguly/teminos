"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const AppScreenshots: React.FC = () => {
  return (
    <>
      <div className="app-screenshots-area bg-color pb-100">
        <div className="container">
          <div className="section-title title-with-bg-text">
            <div className="big-title">App Screen</div>
            <span className="sub-title">APP SCREENS</span>
            <h2>Beautifully Crafted All App Screenshots</h2>
          </div>

          <Swiper
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="app-screenshots-slides"
          >
            <SwiperSlide className="single-screenshot-item">
              <Image
                src="/images/screenshots/screenshots1.png"
                alt="screenshots"
                width={528}
                height={1114}
              />
            </SwiperSlide>

            <SwiperSlide className="single-screenshot-item">
              <Image
                src="/images/screenshots/screenshots2.png"
                alt="screenshots"
                width={528}
                height={1114}
              />
            </SwiperSlide>

            <SwiperSlide className="single-screenshot-item">
              <Image
                src="/images/screenshots/screenshots3.png"
                alt="screenshots"
                width={528}
                height={1114}
              />
            </SwiperSlide>

            <SwiperSlide className="single-screenshot-item">
              <Image
                src="/images/screenshots/screenshots4.png"
                alt="screenshots"
                width={528}
                height={1114}
              />
            </SwiperSlide>

            <SwiperSlide className="single-screenshot-item">
              <Image
                src="/images/screenshots/screenshots5.png"
                alt="screenshots"
                width={528}
                height={1114}
              />
            </SwiperSlide>

            <SwiperSlide className="single-screenshot-item">
              <Image
                src="/images/screenshots/screenshots4.png"
                alt="screenshots"
                width={528}
                height={1114}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Animation Shape Image */}
        <div className="app-screenshots-shape-1">
          <Image
            src="/images/home-7-8-9/screenshots/shape-1.png"
            alt="image"
            width={93}
            height={85}
          />
        </div>
        <div className="app-screenshots-shape-2">
          <Image
            src="/images/home-7-8-9/screenshots/shape-2.png"
            alt="image"
            width={93}
            height={116}
          />
        </div>
      </div>
    </>
  );
};

export default AppScreenshots;
