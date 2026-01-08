import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Container from "./common/Container";

const sponsors = [{
  img: "01",
  name: "Google"
}, {
  img: "02",
  name: "Nestle"
}, {
  img: "03",
  name: "Disney"
}, {
  img: "04",
  name: "Airbnb"
}, {
  img: "05",
  name: "Grab"
}, {
  img: "06",
  name: "Netflix"
},]

const SponserSlider = () => {
  return (
    <div className="bg-[#FFF9F1] py-12.5">
      <Container>
        <Swiper slidesPerView={5} loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          spaceBetween={50}
          modules={[Autoplay]}
          className="">
          {sponsors.map(({ img, name }, index) => (
            <SwiperSlide className="select-none"
              key={index}>
              <img src={`/images/sponser/${img}.png`}
                alt={name} className="w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  )
}

export default SponserSlider