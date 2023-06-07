import { Inner } from "./SliderSty";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

const Sliders = () => {
  return (
    <>
      <Inner>
        <Swiper
          // effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          // coverflowEffect={{
          //   rotate: 50,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          //   slideShadows: true,
          // }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://d2j6uvfek9vas1.cloudfront.net/millie_logo/647fd5e5115ad.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://d2j6uvfek9vas1.cloudfront.net/millie_logo/647861c93617c.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://d2j6uvfek9vas1.cloudfront.net/millie_logo/647d927a25c9a.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://d2j6uvfek9vas1.cloudfront.net/millie_logo/6459eab77483a.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://d2j6uvfek9vas1.cloudfront.net/millie_logo/6417b68a310f1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://d2j6uvfek9vas1.cloudfront.net/millie_logo/62fd954b612f7.png" />
          </SwiperSlide>
        </Swiper>
      </Inner>
    </>
  );
};
export default Sliders;
