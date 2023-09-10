'use client';
import { useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
  Spinner,
} from '@nextui-org/react';
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineCloseCircle,
} from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BiPaperPlane } from 'react-icons/bi';
import { BsPhone } from 'react-icons/bs';
import { toast } from 'react-toastify';
import schema from '../../lib/schema';

const Model = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
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
        onClose();
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        variant="bordered"
        className="lg:w-40 border-colors6 py-5 shadow-btnShadow hover:translate-x-1"
        endContent={<BiPaperPlane />}
      >
        Get in Touch
      </Button>

      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="auto"
        className="bg-colors1"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <ModalHeader className="flex flex-col gap-1">
                  Send your query
                </ModalHeader>
                <ModalBody>
                  <Input
                    isRequired
                    className="mb-1"
                    endContent={
                      <AiOutlineUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                    variant="bordered"
                    {...register('name')}
                    errorMessage={errors.name && errors.name.message}
                  />
                  <Input
                    isRequired
                    className="mb-1"
                    endContent={
                      <AiOutlineMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                    {...register('email')}
                    errorMessage={errors.email && errors.email.message}
                  />

                  <Input
                    isRequired
                    className="mb-1"
                    endContent={
                      <BsPhone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Contact No"
                    placeholder="Enter your number"
                    type="number"
                    variant="bordered"
                    {...register('contact')}
                    errorMessage={errors.contact && errors.contact.message}
                  />
                  <Textarea
                    isRequired
                    className="mb-1"
                    endContent={
                      <AiOutlineMessage className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Message"
                    placeholder="Enter your message"
                    type="text"
                    variant="bordered"
                    {...register('message')}
                    errorMessage={errors.message && errors.message.message}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    startContent={<AiOutlineCloseCircle />}
                    color="danger"
                    variant="flat"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                  <Button
                    startContent={loading ? <Spinner /> : <BiPaperPlane />}
                    type="submit"
                    className=" bg-colors5 text-colors1"
                    onClick={onClose}
                    isDisabled={loading}
                  >
                    {loading ? 'Submitting' : 'Submit'}
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Model;
