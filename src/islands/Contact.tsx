import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

// TODO: how to import astro files?
// import Container from "src/components/common/Container.astro";
// import Connections from "./Connections.astro";
import TextField from 'src/components/common/TextField';
import TextArea from 'src/components/common/TextArea';
import Button from 'src/components/common/Button';

const { PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, PUBLIC_KEY } = import.meta.env

type FormInputs = {
  name: string;
  email: string;
  message: string;
}

type Props = {}

export default function Contact({ }: Props) {
  const [loading, setLoading] = useState<boolean>(false)
  const { register, reset, clearErrors, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const contactForm = useRef<HTMLFormElement>(null);

  const sendEmail = async (e?: any) => {
    e?.preventDefault();

    if (!contactForm.current) {
      toast.error('Form reference not found');
      return;
    }

    setLoading(true)
    try {
      await emailjs.sendForm(PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, contactForm.current, PUBLIC_KEY);
      reset();
      clearErrors(["name", "email", "message"]);
      toast.success('Nice! I\'ll get back to you soon.');
    } catch (error) {
      console.error('Email send error:', error);
      toast.error('Oops! email wasn\'t sent.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container pt-2 pb-4 md:pt-6 md:pb-8">
      <div id="contact">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold inline-block bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">Get In Touch</h2>
        <p className="text-sm md:text-base lg:text-xl text-gray-300">Have an exciting project where you need some help? or maybe you just wanna talk!</p>
        <p className="text-sm md:text-base lg:text-xl text-gray-300 mb-4">Send me over a message, and let&apos;s chat.</p>
        <div className='lg:flex'>
          <form className='lg:w-2/3' ref={contactForm} onSubmit={handleSubmit((data, e) => sendEmail(e))}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <div className="relative">
                <TextField register={register} label="Name" required />
                {errors.name?.type === 'required' && <p className="text-sm text-red-500 absolute right-[15px] top-[15px]">What's your name?</p>}
              </div>
              <div className="relative">
                <TextField register={register} label="Email" required />
                {errors.email?.type === 'required' && <p className="text-sm text-red-500 absolute right-[15px] top-[15px]">What's your email?</p>}
              </div>
            </div>
            <div className="relative">
              <TextArea register={register} label="Message" required rows={5} />
              {errors.message?.type === 'required' && <p className="text-sm text-red-500 absolute right-[15px] top-[15px]">What's your message?</p>}
            </div>

            <Button
              label="Send"
              type="submit"
              loading={loading}
            />
          </form>
          <div className='lg:w-1/3 lg:px-8 py-2 lg:py-0'>
            <p className="text-sm lg:text-lg text-gray-300 mb-1 lg:mb-2">
              <b className="text-pink-600">phone:</b> +352 661 287 509
            </p>
            <p className="text-sm lg:text-lg text-gray-300 mb-1 lg:mb-2">
              <b className="text-pink-600">email:</b> abdelhak.ajbouni@gmail.com
            </p>
            {/* <Connections /> */}
          </div>
        </div>
        <Toaster position="bottom-center" />
      </div>
    </div>
  );
}