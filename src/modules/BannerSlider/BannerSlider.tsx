import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerItems } from "../../contstants/banner-items";
import BannerSlide from "../../components/ui/BannerSlide/BannerSlide";
import { Box, useMediaQuery } from "@mui/material";
import { BannerContainer } from "../../components/ui/Container/BannerContainer";
import "./Slider.scss";

const BannerSlider = () => {
  const sliderRef = React.useRef<Slider | null>(null);
  const isSmallScreen: boolean = useMediaQuery("(max-width:500px)");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handlePrevClick = (): void => {
    if (sliderRef.current) {
      (sliderRef.current as Slider).slickPrev();
    }
  };

  const handleNextClick = (): void => {
    if (sliderRef.current) {
      (sliderRef.current as Slider).slickNext();
    }
  };

  return (
    <BannerContainer maxWidth="xl">
      <Box
        sx={{
          width: {
            xl: "99.9%",
            lg: "99.9%",
            md: "99.9%",
            sm: "99.9%",
            xs: "98%",
          },
        }}
      >
        <Slider {...settings} ref={sliderRef}>
          {bannerItems.map((slide, index) => (
            <Box key={index}>
              <BannerSlide
                image={isSmallScreen ? slide.smallImage : slide.image}
                title={slide.title}
                text={slide.text}
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </BannerContainer>
  );
};

export default BannerSlider;
