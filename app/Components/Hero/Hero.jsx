import Flow from '../Flow/Flow';
import { Carousels, Model } from '../index';

const Hero = () => {
  return (
    <>
      <section id="home" className="bg-colors3 border-3 border-colors5 ">
        <div className=" lg:max-w-[90%] max-w-[300px] md:max-w-[600px] mx-auto  my-5 lg:my-10 ">
          <div className=" lg:relative rounded-sm object-cover">
            <Carousels />
            {/* <Flow /> */}
          </div>

          {/* Small screen */}
          <div className=" bg-colors1 lg:border-5 border-r-3 border-l-3 border-b-3 border-colors5 lg:absolute lg:w-[50%]  lg:right-[25%] lg:top-[70%] xl:top-[60%]  lg:my-0 rounded-sm">
            <article>
              <h1 className="text-colors5 text-lg max-w-[100%] lg:text-2xl lg:my-3  lg:max-w-[60%] xl:max-w-[60%] 2xl:max-w-[60%] lg:ps-9 ps-5 font-extrabold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum, atque!
              </h1>
              <p className="ps-5 lg:ps-9 max-w-[100%] text-sm lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis ipsa reprehenderit voluptatem veniam accusantium
                voluptas esse ratione enim tenetur sint.
              </p>
            </article>
            <div className="ps-5 lg:ps-9 my-5">
              <Model />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
