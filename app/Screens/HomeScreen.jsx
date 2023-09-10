import {
  About,
  Feedbacks,
  Gallery,
  Hero,
  Services,
  Experience,
  Tech,
  Form,
} from '../Components';
// import Albums from '../Components/Album/Albums';

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Services />
      <Experience />
      <Gallery />
      <Feedbacks />
      {/* <Albums /> */}
      <Tech />
      <Form />
      {/* <About /> */}
    </>
  );
};

export default HomeScreen;
