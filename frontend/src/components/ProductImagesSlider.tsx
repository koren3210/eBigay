import _ from "lodash";
import { SwiperSlide } from "swiper/react";
import {
  StyledSwiperMain,
  StyledSwiperThumbs,
} from "../assets/styles/components/ProductImagesSlider.styled";
import {
  MainIMg,
  SecondaryImg,
  ImgsWrapper,
} from "../assets/styles/components/ProductDetails.styled";
import { Navigation, Thumbs } from "swiper";
import { useState } from "react";
import { type Swiper as SwiperRef } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface SliderProps {
  images: string[];
}

const ProductImagesSlider = ({ images }: SliderProps) => {
  const [activeThumb, setActiveThumb] = useState<SwiperRef>();

  return (
    <>
      <StyledSwiperMain
        slidesPerView={1}
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
      >
        {images.map((item) => (
          <SwiperSlide key={_.uniqueId()}>
            <MainIMg src={item} alt="product images" />
          </SwiperSlide>
        ))}
      </StyledSwiperMain>
      <StyledSwiperThumbs
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        {images.map((item) => (
          <SwiperSlide key={_.uniqueId()}>
            <div className="product-images-slider-thumbs-wrapper">
              <SecondaryImg src={item} alt="product images" />
            </div>
          </SwiperSlide>
        ))}
      </StyledSwiperThumbs>
    </>
  );
};

export default ProductImagesSlider;
