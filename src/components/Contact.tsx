import { useState } from 'react';
import { useForm } from "react-hook-form";

import TextField from './common/TextField';
import TextArea from './common/TextArea';
import Button from './common/Button';

export default function Contact({ }: Props) {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState({});

  return (
    <div id="contact" className="contact mb-32">
      <h2 className="text-5xl text-red-500 font-bold mb-2">Talk to me</h2>
      <div className='flex'>
        <form className='w-1/2' onSubmit={handleSubmit((data) => setResult(data))}>
          <TextField register={register} label="Your Name" />
          <TextField register={register} label="Your Email" />
          <TextArea register={register} label="Your Message" />

          <Button loading={false}>Send</Button>
        </form>
        <div className='w-1/2 px-16'>
          <p className="text-xl text-gray-500 mb-2">
            <b>phone:</b> +216 90 100 181
          </p>
          <p className="text-xl text-gray-500 mb-2">
            <b>email:</b> abdelhak.ajbouni@gmail.com
          </p>
        </div>
      </div>
    </div >
  );
}

type Props = {}