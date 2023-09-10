'use client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from '@nextui-org/react';

const Tech = () => {
  return (
    <section
      id="gallery"
      className="border-r-3 border-t-3 border-b-3 border-colors5 bg-colors1"
    >
      <div className="max-w-[90%] mx-auto my-5 lg:my-5 ">
        <h2 className="lg:text-4xl xl:text-4xl text-lg text-start lg:text-start font-extrabold py-5 lg:py-5 ms-3">
          What We Do
        </h2>
        <div className=" gap-4 grid grid-cols-12 grid-rows-2 px-8 -ms-6">
          <Card
            radius="none"
            className="col-span-12 sm:col-span-4 h-[300px]  border-5 border-colors5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Outdoor PhotoShoot
              </p>
              <h4 className="text-white font-medium text-large">
                Outdoor PhotoShoot
              </h4>
            </CardHeader>
            <Image
              radius="none"
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-sm"
              src="https://images.unsplash.com/photo-1625158244883-08c331ec9f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2865&q=80"
            />
          </Card>
          <Card
            radius="none"
            className="col-span-12 sm:col-span-4 h-[300px] w-[100%]  border-5 border-colors5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start ">
              <p className="text-tiny text-white/60 uppercase font-bold">
                WeddingPhotoShoot
              </p>
              <h4 className="text-white font-medium text-large">
                Wedding PhotoShoot
              </h4>
            </CardHeader>
            <Image
              radius="none"
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1610047520958-b42ebcd2f6cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
            />
          </Card>
          <Card
            radius="none"
            className="col-span-12 sm:col-span-4 h-[300px] w-[100%] border-5 border-colors5 rounded-sm"
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Event PhotoShoot
              </p>
              <h4 className="text-white font-medium text-large">
                Event PhotoShoot
              </h4>
            </CardHeader>
            <Image
              radius="none"
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1614607653708-0777e6d003b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80"
            />
          </Card>
          <Card
            radius="none"
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-5 border-5 border-colors5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Birthday Celebration
              </p>
              <h4 className="text-black font-medium text-2xl">
                Birthday PhotoShoot
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://images.unsplash.com/photo-1676644124012-3f430c046d1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Birthday Celebration</p>
                <p className="text-black text-tiny">Make memories that lasts</p>
              </div>
              {/* <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button> */}
            </CardFooter>
          </Card>
          <Card
            radius="none"
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-7  border-5 border-colors5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Video Editing
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                Video Editing
              </h4>
            </CardHeader>
            <Image
              radius="none"
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2800&q=80"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Video Editing</p>
                  <p className="text-tiny text-white/60">
                    Professional Video editing service
                  </p>
                </div>
              </div>
              {/* <Button radius="full" size="sm">
                Get App
              </Button> */}
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Tech;
