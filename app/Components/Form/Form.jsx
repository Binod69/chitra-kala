'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Image, Textarea, Button, Spinner } from '@nextui-org/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import schema from '../../lib/schema';

const Form = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const fetchApi = process.env.NEXT_PUBLIC_SEND_API_EMAIL;
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await fetch(fetchApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data,
        }),
      });
      if (res.status === 200) {
        toast.success('Email sent!');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Contact" className="border-3  border-colors5 bg-colors3">
      <div className="max-w-[90%] mx-auto my-5 lg:my-10">
        <div className="flex justify-center items-center">
          <div className=" flex justify-center flex-col lg:flex-row  items-center border-5 border-colors5 bg-colors1">
            <div className="w-[100%] h-[100%] ms-3 lg:ms-5  order-2 lg:order-1">
              <h2 className="lg:text-4xl xl:text-4xl text-lg text-start lg:text-start font-extrabold pt-3 lg:py-2">
                HAVE A WEDDING PLANNED?
              </h2>
              <h6 className="lg:text-3xl xl:text-3xl text-lg text-start  lg:text-start  font-extralight  ">
                LET&apos;S GET TO WORK
              </h6>
              <form
                className="w-[90%] lg:w-[50%] lg:py-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  isRequired
                  isClearable
                  type="text"
                  variant="underlined"
                  placeholder="Your name"
                  {...register('name')}
                  errorMessage={errors.name && errors.name.message}
                />

                <Input
                  isRequired
                  isClearable
                  type="email"
                  variant="underlined"
                  placeholder="Your email"
                  className="py-3"
                  {...register('email')}
                  errorMessage={errors.email && errors.email.message}
                />

                <Input
                  isClearable
                  type="number"
                  variant="underlined"
                  placeholder="Your number"
                  className="py-3"
                  {...register('contact')}
                  errorMessage={errors.contact && errors.contact.message}
                />

                <Textarea
                  isRequired
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Don't hesitate,write down everything"
                  className=" my-3"
                  {...register('message')}
                  errorMessage={errors.message && errors.message.message}
                />

                <Button
                  type="submit"
                  variant={'bordered'}
                  className={
                    'lg:w-40 w-[100%] border-colors6 mb-5  shadow-btnShadow text-extrabold hover:translate-x-1'
                  }
                  endContent={loading ? <Spinner /> : <AiOutlineArrowRight />}
                  isDisabled={loading}
                >
                  {loading ? 'Sending...' : 'Send'}
                </Button>
              </form>
            </div>
            <div className="lg:max-w-[60%] max-h-[100%] order-1 lg:order-2">
              <Image
                radius="none"
                src={'/images/msg.webp'}
                alt="contact us"
                className="max-w-[100%] h-[100%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
