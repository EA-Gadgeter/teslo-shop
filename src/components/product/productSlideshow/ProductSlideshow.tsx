"use client";

import { useState } from "react";

import Image from "next/image";

import type { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./ProductSlideshow.css";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductSlideshow: React.FC<Props> = ({ images, title, className }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <div className={className}>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 6000
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay ]}
        className="bigSwiper"
      >
        {
          images.map(image => (
            <SwiperSlide key={image}>
              <Image
                width={1024}
                height={800}
                src={`/products/${image}`}
                alt={title}
                className="rounded-lg object-fill"
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          images.map(image => (
            <SwiperSlide key={image}>
              <Image
                width={300}
                height={300}
                src={`/products/${image}`}
                alt={title}
                className="rounded-lg object-fill"
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};