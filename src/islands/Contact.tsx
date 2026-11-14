import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

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

  const sendEmail = async (e?: React.FormEvent<HTMLFormElement>) => {
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
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold inline-block mb-2 text-purple-300">Get In Touch</h2>
        <p className="text-sm md:text-base lg:text-xl text-gray-300">Have an app idea, a project in mind, or just want to say hi?</p>
        <p className="text-sm md:text-base lg:text-xl text-gray-300 mb-4">Drop me a message — I’d love to hear what you’re working on.</p>
        <div className='lg:flex'>
          <form className='lg:w-2/3' ref={contactForm} onSubmit={handleSubmit((data, e) => sendEmail(e))}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <div className="min-w-0">
                <TextField register={register} label="Name" required />
                {errors.name?.type === 'required' && <p className="text-sm text-pink-300 mb-3">What's your name?</p>}
              </div>
              <div className="min-w-0">
                <TextField register={register} label="Email" required />
                {errors.email?.type === 'required' && <p className="text-sm text-pink-300 mb-3">What's your email?</p>}
              </div>
            </div>
            <div className="min-w-0">
              <TextArea register={register} label="Message" required rows={5} />
              {errors.message?.type === 'required' && <p className="text-sm text-pink-300 mb-3">What's your message?</p>}
            </div>

            <Button
              label="Send"
              type="submit"
              loading={loading}
            />
          </form>
          <div className='lg:w-1/3 lg:pl-8 py-2 lg:py-0 break-words'>
            <p className="text-sm lg:text-lg text-gray-300 mb-1 lg:mb-2">
              <b className="text-pink-400">phone:</b> <a href="tel:+352661287509">+352 661 287 509</a>
            </p>
            <p className="text-sm lg:text-lg text-gray-300 mb-1 lg:mb-2">
              <b className="text-pink-400">email:</b> <a href="mailto:abdelhak.ajbouni@gmail.com">abdelhak.ajbouni@gmail.com</a>
            </p>
          </div>
        </div>
        <Toaster position="bottom-center" />
      </div>
    </div>
  );
}