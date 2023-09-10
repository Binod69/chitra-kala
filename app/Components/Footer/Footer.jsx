'use client';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <footer className="bg-colors2 border-r-3 border-b-3 border-l-3 border-colors5">
        <div className="max-w-[90%] mx-auto ">
          <div className="flex justify-between flex-col md:flex-row lg:flex-row xl:flex-row">
            <div className="lg:my-5">
              <h2 className="lg:text-2xl xl:text-2xl text-lg text-start ms-3 lg:text-start  font-extrabold pt-5  ">
                Chitrakala Studio
              </h2>
              <p className="ms-3 lg:text-sm font-light max-w-[70%]">
                <q>Exposure to Excellence: We Frame Your Story!</q>
              </p>
              <p className="ms-3 lg:text-sm  font-bold">Kakarvitta,jhapa</p>
            </div>
            <div className="mb-5 lg:my-5">
              <h2 className="lg:text-2xl xl:text-2xl text-lg text-start ms-3 lg:text-start  font-extrabold pt-5  ">
                Connect With Us
              </h2>
              <div className="ms-3 my-1 lg:my-0">
                <Link href="https://www.facebook.com/" target="_blank">
                  <Button
                    variant="bordered"
                    isIconOnly
                    aria-label="facebook"
                    className=" border-colors6  shadow-btnShadow me-3 hover:translate-x-1 "
                  >
                    <BsFacebook size={20} />
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                  <Button
                    variant="bordered"
                    isIconOnly
                    aria-label="instagram"
                    className=" border-colors6  shadow-btnShadow me-3 hover:translate-x-1"
                  >
                    <AiFillInstagram size={20} />
                  </Button>
                </Link>
                <Link href="https://www.tiktok.com/" target="_blank">
                  <Button
                    variant="bordered"
                    isIconOnly
                    aria-label="tiktok"
                    className=" border-colors6  shadow-btnShadow hover:translate-x-1"
                  >
                    <FaTiktok size={20} />
                  </Button>
                </Link>
                <Link href="https://www.youtube.com/" target="_blank">
                  <Button
                    variant="bordered"
                    isIconOnly
                    aria-label="facebook"
                    className=" border-colors6  shadow-btnShadow ms-3 hover:translate-x-1"
                  >
                    <AiFillYoutube size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:text-center md:text-center">
            <span className="lg:text-sm xl:text-sm text-sm  lg:text-center font-extrabold">
              &copy; {date} Designed and Developed by{' '}
              <Link
                target="_blank"
                className="underline"
                href="https://facebook.com/line.between.two.dots"
              >
                Binod Budhathoki
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
