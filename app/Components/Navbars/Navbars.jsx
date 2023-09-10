'use client';
import Link from 'next/link';
import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider,
} from '@nextui-org/react';
import { Btn } from '../index';
import { FiPhoneCall } from 'react-icons/fi';

const Navbars = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const ele = document.getElementById(targetId);
    ele?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Navbar
        isBlurred={true}
        className="bg-yellow text-color5 border-r-3 border-t-3 border-l-3 border-b-3 border-colors5 max-w-[100%] mx-auto"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />

          <NavbarBrand>
            <Link href="#home" onClick={handleScroll}>
              <p className="text-inherit font-extrabold hover:text-colors6">
                Chitrakala Studio
              </p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-5  hover:text-colors6"
          justify="center"
        >
          <NavbarItem>
            <Link color="foreground" href="#home" onClick={handleScroll}>
              Home
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link href="#about" onClick={handleScroll}>
              About
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link color="foreground" href="#services" onClick={handleScroll}>
              Our Services
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link color="foreground" href="#gallery" onClick={handleScroll}>
              Photo Gallery
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Link href="tel:+4733378901">
              <Btn
                title={'Contact Us'}
                variant={'bordered'}
                className={
                  'lg:w-40 border-colors6 py-5 shadow-btnShadow hover:translate-x-1'
                }
                icons={<FiPhoneCall />}
              />
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-yellow max-h-36 border-b-3  border-colors5">
          <NavbarMenuItem>
            <Link href="#home" onClick={handleScroll}>
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#about" onClick={handleScroll}>
              About
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#services" onClick={handleScroll}>
              Our Services
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#gallery" onClick={handleScroll}>
              Photo Gallery
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};
export default Navbars;
