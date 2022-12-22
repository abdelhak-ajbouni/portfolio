import { useState, useRef, BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

// TODO: how to import astro files?
// import Container from "src/components/common/Container.astro";
// import Connections from "./Connections.astro";
import TextField from 'src/components/common/TextArea';
import TextArea from 'src/components/common/TextArea';
import Button from 'src/components/common/Button';

const { PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, PUBLIC_KEY } = import.meta.env

export default function Contact({ }: Props) {
  const [loading, setLoading] = useState<boolean>(false)
  const { register, reset, clearErrors, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  // TODO: fix useRef type?
  const contactForm = useRef<any>(null!);

  const sendEmail = async (e: BaseSyntheticEvent<object, any, any> | undefined) => {
    e?.preventDefault();

    setLoading(true)
    await emailjs
      .sendForm(PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, contactForm.current, PUBLIC_KEY)
      .catch(error => toast.error('Oops! email wasn\'t sent.'))
    setLoading(false)
    reset()
    clearErrors(["name", "email", "message"])
    toast.success('Nice! I\'ll get back to you soon.');
  };

  return (
    <div className="container">
      <div id="contact" className="mb-32">
        <h2 className="text-5xl font-bold inline-block bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">Get in touch</h2>
        <p className="text-l text-gray-300">Have an exciting project where you need some help? or maybe you just wanna talk!</p>
        <p className="text-l text-gray-300 mb-4">Send me over a message, and let&apos;s chat.</p>
        <div className='flex'>
          <form className='w-2/3' ref={contactForm} onSubmit={handleSubmit((data, e) => sendEmail(e))}>
            <div className="relative">
              <TextField register={register} label="Name" required />
              {errors.name?.type === 'required' && <p className="text-sm text-red-500 absolute right-[15px] top-[15px]">Whats your name?</p>}
            </div>
            <div className="relative">
              <TextField register={register} label="Email" required />
              {errors.email?.type === 'required' && <p className="text-sm text-red-500 absolute right-[15px] top-[15px]">Whats your email?</p>}
            </div>
            <div className="relative">
              <TextArea register={register} label="Message" required rows={5} />
              {errors.message?.type === 'required' && <p className="text-sm text-red-500 absolute right-[15px] top-[15px]">Whats your message?</p>}
            </div>

            <Button
              label="Send"
              type="submit"
              loading={loading}
            />
          </form>
          <div className='w-1/3 px-8'>
            <p className="text-xl text-gray-300 mb-2">
              <b>phone:</b> +352 661 287509
            </p>
            <p className="text-xl text-gray-300 mb-2">
              <b>email:</b> abdelhak.ajbouni@gmail.com
            </p>
            {/* <Connections /> */}
          </div>
        </div>
        <Toaster position="bottom-center" />
      </div>
    </div>
  );
}

type FormInputs = {
  name: string;
  email: string;
  message: string;
}

type Props = {}