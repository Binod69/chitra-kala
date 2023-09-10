'use client';
import Slider from 'react-slick';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from '@nextui-org/react';
import feedbackData from './feedbackData';

const Feedbacks = () => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="border-l-3 border-r-3  border-colors5 bg-colors2">
        <div className="max-w-[90%] mx-auto ">
          <h2 className="lg:text-4xl xl:text-4xl text-lg text-start ms-3 lg:text-start  font-extrabold py-5 lg:py-10 ">
            Lets Hear Some Feedbacks
          </h2>

          <Slider {...settings}>
            {feedbackData &&
              feedbackData.map((items) => (
                <div key={items.id}>
                  <Card
                    radius="none"
                    className="max-w-[340px] border-5 border-colors5  mb-10 me-3 rounded-sm"
                  >
                    <CardHeader className="justify-between">
                      <div className="flex gap-5">
                        <Avatar
                          isBordered
                          radius="full"
                          size="md"
                          src={items.image}
                          alt={items.name}
                        />
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <h4 className="text-small font-semibold leading-none text-default-600">
                            {items.name}
                          </h4>
                          <h5 className="text-small tracking-tight text-default-400">
                            @{items.atTheRate}
                          </h5>
                        </div>
                      </div>
                    </CardHeader>
                    <CardBody className="px-3 py-0 text-small text-default-400">
                      <p>{items.message}</p>
                      <span className="pt-2">
                        #{items.hastag}
                        <span className="py-2" aria-label="camera" role="img">
                          📸
                        </span>
                      </span>
                    </CardBody>
                    <CardFooter className="gap-3">
                      <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">
                          4
                        </p>
                        <p className=" text-default-400 text-small">
                          Following
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">
                          97.1K
                        </p>
                        <p className="text-default-400 text-small">Followers</p>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Feedbacks;
