'use client';
import { Image } from '@nextui-org/react';
import NextImage from 'next/image';
import LightGallery from 'lightgallery/react/Lightgallery.es5';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Link from 'next/link';

const Gallery = () => {
  return (
    <>
      <section id="gallery" className="border-3 border-colors5 bg-colors3">
        <div className="max-w-[90%] mx-auto my-5 lg:my-10">
          <h2 className="lg:text-4xl xl:text-4xl text-lg text-start ms-3 lg:text-start  font-extrabold lg:my-10">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div className="border-5 h-[100%] border-colors5 rounded-sm">
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <Link href={'/images/gallery1.webp'}>
                    <Image
                      isZoomed
                      radius="none"
                      className="h-[100%] max-w-[100%] "
                      src={'/images/gallery1.webp'}
                      alt="Wedding Photo"
                    />
                  </Link>
                </LightGallery>
              </div>
              <div className="border-5 border-colors5 rounded-sm">
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <Link href={'/images/3x5.webp'}>
                    <Image
                      isZoomed
                      radius="none"
                      className="h-auto max-w-full "
                      src={'/images/3x5.webp'}
                      alt="bannner"
                    />
                  </Link>
                </LightGallery>
              </div>
              <div className="border-5 border-colors5 rounded-sm">
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <Link href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg">
                    <Image
                      isZoomed
                      radius="none"
                      className="h-auto max-w-full "
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                      alt="bannner"
                    />
                  </Link>
                </LightGallery>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="border-5 border-colors5 rounded-sm">
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <Link href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg">
                    <Image
                      isZoomed
                      radius="none"
                      className="h-auto max-w-full"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                      alt="bannner"
                    />
                  </Link>
                </LightGallery>
              </div>
              <div className="border-5 border-colors5 rounded-sm">
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <Link href="/images/4xx6.webp">
                    <Image
                      isZoomed
                      radius="none"
                      className="h-auto max-w-full "
                      src="/images/4xx6.webp"
                      alt="wedding"
                    />
                  </Link>
                </LightGallery>
              </div>
              <div className="border-5 border-colors5 rounded-sm">
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <Link href={'/images/3xx5.webp'}>
                    <Image
                      isZoomed
                      radius="none"
                      className="h-auto max-w-full "
                      src="/images/3xx5.webp"
                      alt="wedding"
                    />
                  </Link>
                </LightGallery>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="border-5 border-colors5 rounded-sm">
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <Link href="/images/44xx6.webp">
                    <Image
                      isZoomed
                      radius="none"
                      className="max-w-full "
                      src="/images/44xx6.webp"
                      alt="wedding"
                    />
                  </Link>
                </LightGallery>
              </div>
              <div className="border-5 border-colors5 rounded-sm">
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <Link href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg">
                    <Image
                      isZoomed
                      radius="none"
                      className="h-auto max-w-full "
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                      alt="bannner"
                    />
                  </Link>
                </LightGallery>
              </div>
              <div className="border-5 border-colors5 rounded-sm">
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <Link href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg">
                    <Image
                      isZoomed
                      radius="none"
                      className="h-auto max-w-full "
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                      alt="bannner"
                    />
                  </Link>
                </LightGallery>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="border-5 border-colors5 rounded-sm">
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <Link href="/images/3xx5x.webp">
                    <Image
                      isZoomed
                      radius="none"
                      className="h-auto max-w-full "
                      src="/images/3xx5x.webp"
                      alt="birthday celebration"
                    />
                  </Link>
                </LightGallery>
              </div>
              <div className="border-5 border-colors5 rounded-sm">
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <Link href="/images/4x8.webp">
                    <Image
                      isZoomed
                      radius="none"
                      className="h-auto max-w-full "
                      src="/images/4x8.webp"
                      alt="wedding"
                    />
                  </Link>
                </LightGallery>
              </div>
              <div className="border-5 border-colors5 rounded-sm">
                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                  <Link href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg">
                    <Image
                      isZoomed
                      radius="none"
                      className="h-auto max-w-full "
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                      alt="bannner"
                    />
                  </Link>
                </LightGallery>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
