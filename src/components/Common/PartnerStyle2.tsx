"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const PartnerStyle2: React.FC = () => {
  return (
    <>
      <div className="partner-area ptb-100">
        <div className="container">
          <div className="partner-title">
            Trusted by companies:
          </div>

          <Swiper
            spaceBetween={25}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className="partner-slides"
          >
            <SwiperSlide className="partner-item">
              <Image
                src="/images/partner/partner9.png"
                alt="partner"
                width={175}
                height={35}
              />
            </SwiperSlide>

            <SwiperSlide className="partner-item">
              <Image
                src="/images/partner/partner10.png"
                alt="partner"
                width={175}
                height={35}
              />
            </SwiperSlide>

            <SwiperSlide className="partner-item">
              <Image
                src="/images/partner/partner11.png"
                alt="partner"
                width={175}
                height={35}
              />
            </SwiperSlide>

            <SwiperSlide className="partner-item">
              <Image
                src="/images/partner/partner12.png"
                alt="partner"
                width={175}
                height={35}
              />
            </SwiperSlide>

            <SwiperSlide className="partner-item">
              <Image
                src="/images/partner/partner13.png"
                alt="partner"
                width={175}
                height={35}
              />
            </SwiperSlide>

            <SwiperSlide className="partner-item">
              <Image
                src="/images/partner/partner14.png"
                alt="partner"
                width={175}
                height={35}
              />
            </SwiperSlide>

            <SwiperSlide className="partner-item">
              <Image
                src="/images/partner/partner15.png"
                alt="partner"
                width={175}
                height={35}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PartnerStyle2;
