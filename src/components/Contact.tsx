import { useForm } from "react-hook-form";
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';

import TextField from './common/TextField';
import TextArea from './common/TextArea';
import Button from './common/Button';
import Connections from "./Connections";
import { sendEmail } from 'src/libs/api';

export default function Contact({ }: Props) {
  const { register, reset, clearErrors, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const { mutate: sendEmailMutation, isLoading } = useMutation(sendEmail, {
    onSuccess: () => {
      toast.success('Nice! I\'ll get back to you soon.');
      reset()
      clearErrors(["name", "email", "message"])
    },
    onError: () => {
      toast.error('Oops! email wasn\'t sent.');
    }
  })

  return (
    <div id="contact" className="contact mb-32">
      <h2 className="text-5xl text-red-500 font-bold ">Get in touch</h2>
      <p className="text-l text-gray-500">Have an exciting project where you need some help? or maybe you just wanna talk!</p>
      <p className="text-l text-gray-500 mb-4">Send me over a message, and let&apos;s chat.</p>
      <div className='flex'>
        <form className='w-1/2' onSubmit={handleSubmit((data) => sendEmailMutation(data))}>
          <div className="relative">
            <TextField register={register} label="Name" required />
            {errors.name?.type === 'required' && <p className="text-sm text-red-500 absolute right-[15px] top-[15px]">Whats your name?</p>}
          </div>
          <div className="relative">
            <TextField register={register} label="Email" required />
            {errors.email?.type === 'required' && <p className="text-sm text-red-500 absolute right-[15px] top-[15px]">Whats your email?</p>}
          </div>
          <div className="relative">
            <TextArea register={register} label="Message" required />
            {errors.message?.type === 'required' && <p className="text-sm text-red-500 absolute right-[15px] top-[15px]">Whats your message?</p>}
          </div>

          <Button
            label="Send"
            type="submit"
            loading={isLoading}
          />
        </form>
        <div className='w-1/2 px-16'>
          <p className="text-xl text-gray-500 mb-2">
            <b>phone:</b> +352 661 287509
          </p>
          <p className="text-xl text-gray-500 mb-2">
            <b>email:</b> abdelhak.ajbouni@gmail.com
          </p>
          <Connections />
        </div>
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