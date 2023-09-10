'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../../../public/images/A.webp';
import banner2 from '../../../public/images/BB.webp';
import banner3 from '../../../public/images/C.webp';
const Carousels = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    useTransform: true,
  };
  return (
    <>
      <div className="max-h-[35.6rem] max-w-[100%] lg:border-5 border-r-3 border-l-3 border-t-3 border-b-3  border-colors5">
        <Slider {...settings}>
          <div className="">
            <Image
              src={banner1}
              alt="banner image"
              quality={80}
              placeholder="blur"
              className=" object-cover max-h-[35rem]"
            />
          </div>
          <div>
            <Image
              src={banner2}
              alt="banner image"
              quality={80}
              placeholder="blur"
              className=" object-cover max-h-[35rem]"
            />
          </div>
          <div>
            <Image
              src={banner3}
              alt="banner image"
              quality={80}
              placeholder="blur"
              className=" object-cover max-h-[35rem]"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousels;
