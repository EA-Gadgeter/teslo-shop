"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, FreeMode, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideshow: React.FC<Props> = ({ title, images, className }) => {
  return (
    <div className={className}>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 6000
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="w-full h-[500px]"
      >
        {
          images.map(image => (
            <SwiperSlide key={image}>
              <Image
                width={600}
                height={500}
                src={`/products/${image}`}
                alt={title}
                className="object-fill"
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};