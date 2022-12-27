import React, { useRef, useState } from "react";
import "./quotes.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
export default function Quotes() {
  return (
    <div className="container-fluid  quotes text-center">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div className="col-10 mx-auto "  >
            <FaQuoteLeft className="quote_icon" />
            <figure className="text-center mb-0">
              <blockquote className="blockquote">
                <p className="pb-3 pt-3" data-aos="zoom-in">
                  <span className="lead font-italic"  >
                    This place is amazing! They offered the best coffee and
                    showed the best attitude to its costumers. Internet
                    connection is very fast and is unlimited as well. This place
                    is indeed perfect for studying and chilling out. It was very
                    quiet and air-conditioned.
                  </span>
                </p>
              </blockquote>
              <figcaption data-aos="zoom-in"  className="blockquote-footer  mb-5">
                Thomas Black
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col-10 mx-auto">
            <FaQuoteLeft className="quote_icon" />

            <figure className="text-center mb-0">
              <blockquote className="blockquote">
                <p className="pb-3 pt-3">
                  <span className="lead font-italic">
                    Will go again.I only popped in to get take-away cappuccinos,
                    but I was struck by how friendly the service was. The
                    cappuccinos were wonderful too! And very well priced.
                  </span>
                </p>
              </blockquote>
              <figcaption className="blockquote-footer  mb-5">
                Tom Johnson
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col-10 mx-auto">
            <FaQuoteLeft className="quote_icon" />

            <figure className="text-center mb-0">
              <blockquote className="blockquote">
                <p className="pb-3 pt-3">
                  <span className="lead font-italic">
                    This place is very different and well organized according to
                    other places. The food is amazing, music of your choice. The
                    owner is very sweet… Ever the best café. The cost is fair
                    for everything and the atmosphere is good.
                  </span>
                </p>
              </blockquote>
              <figcaption className="blockquote-footer  mb-5">
                Harry Edison
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
