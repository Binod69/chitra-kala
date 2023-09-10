'use client';
import Image from 'next/image';
import { Divider } from '@nextui-org/react';
import services from '../../../public/images/service.svg';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Services = () => {
  return (
    <>
      <section id="services">
        <div className="bg-colors1 border-r-3 border-l-3 border-b-3 border-colors5 overflow-hidden">
          <div className="lg:max-w-[90%] mx-auto">
            <h2 className="lg:text-4xl xl:text-4xl text-lg text-start ms-3 lg:text-start  font-extrabold lg:my-10">
              Our Services
            </h2>
            <div className=" grid  lg:grid-cols-2 lg:grid-rows-1  lg:my-10 ">
              <div className=" hidden  lg:grid border-5   border-colors5 rounded-sm">
                <Image
                  radius="none"
                  alt="women with flowers"
                  src={services}
                  className="object-cover w-[100%] h-[100%]"
                />
              </div>
              <div className=" lg:ms-10 flex items-center=">
                <div className="w-[100%]">
                  <Divider className="bg-colors6 my-2 " />
                  <div className="flex items-center justify-between">
                    <h5 className="lg:text-4xl text-lg ms-3 lg:ms-0 font-extrabold text-colors5 my-5">
                      Photos & Videos
                    </h5>
                    <span>
                      <AiOutlineArrowRight size={20} />
                    </span>
                  </div>
                  <Divider className="bg-colors6 my-2" />
                  <div className="flex items-center justify-between">
                    <h5 className="lg:text-4xl text-lg ms-3 lg:ms-0 font-extrabold text-colors5 my-5">
                      Frame & Lamination
                    </h5>
                    <span className="text-4xl">
                      <AiOutlineArrowRight size={20} />
                    </span>
                  </div>

                  <Divider className="bg-colors6 my-2" />
                  <div className="flex items-center justify-between">
                    <h5 className="lg:text-4xl text-lg ms-3 lg:ms-0 font-extrabold text-colors5 my-5">
                      Video Editing
                    </h5>
                    <span>
                      <AiOutlineArrowRight size={20} />
                    </span>
                  </div>

                  <Divider className="bg-colors6 my-2" />
                  <div className="flex items-center justify-between">
                    <h5 className="lg:text-4xl text-lg ms-3 lg:ms-0 font-extrabold text-colors5 my-5">
                      Graphic Designing
                    </h5>
                    <span>
                      <AiOutlineArrowRight size={20} />
                    </span>
                  </div>
                  <Divider className="bg-colors6 my-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
