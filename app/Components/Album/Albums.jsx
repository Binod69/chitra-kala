'use client';
import PhotoAlbum from 'react-photo-album';
import photos from './photos';

const Albums = () => {
  return (
    <>
      <section className="border-3 border-colors5 bg-colors3">
        <div className="max-w-[90%] mx-auto my-5 lg:my-10">
          <h2 className="lg:text-4xl xl:text-4xl text-lg text-start ms-3 lg:text-start  font-extrabold lg:my-10">
            Photo Gallery
          </h2>
          <PhotoAlbum layout="masonry" photos={photos} />
        </div>
      </section>
    </>
  );
};

export default Albums;
