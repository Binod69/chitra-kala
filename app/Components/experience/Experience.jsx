'use client';
import { Divider } from '@nextui-org/react';

const Experience = () => {
  return (
    <>
      <section className="bg-colors2  border-l-3 border-r-3 border-colors5">
        <div className="lg:max-w[1300px] mx-auto py-8 lg:py-10">
          <article className="text-center flex  justify-center items-center flex-col md:flex-row lg:flex-row">
            <span className=" text-sm lg:text-3xl font-extrabold">
              5+ YEARS OF EXPERIENCE
            </span>
            <span className="border-r md:border-2 lg:border-2 border-1 border-colors5 mx-5 md:h-5 lg:h-10  w-40 md:w-0 lg:w-0 my-2 lg:my-0"></span>
            <span className="text-sm lg:text-3xl  font-extrabold">
              100+ Projects Completed
            </span>
            <span className="border-r md:border-2 lg:border-2 border-1 border-colors5 mx-5 md:h-5 lg:h-10  w-40 md:w-0 lg:w-0 my-2 lg:my-0"></span>
            <span className="text-sm lg:text-3xl font-extrabold">
              100% Customer Satisfaction
            </span>
          </article>
        </div>
      </section>
    </>
  );
};

export default Experience;
