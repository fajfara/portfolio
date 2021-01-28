import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import Button from '../button/Button';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = data => {
    console.log(data);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <form name="contact" className="flex flex-wrap" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-1/2 pr-1">
        <input className="border border-black w-full mb-2 p-4" name="firstname" ref={register} />
      </div>
      <div className="w-1/2 pl-1">
        <input className="border border-black w-full mb-2 p-4" name="lastname" ref={register} />
      </div>
      <input
        className={`p-4 border w-full mb-2 ${errors.email ? 'border-red-500' : 'border-black'}`}
        name="email"
        ref={register({
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        })}
      />
      {errors.email && (
        <span className="text-red-500 w-full mb-3">{errors.email.message !== '' ? errors.email.message : 'Email is required'}</span>
      )}
      <textarea
        className={`border w-full mb-2 p-4 ${errors.message ? 'border-red-500' : 'border-black'}`}
        name="message"
        ref={register({ required: true })}
      />
      {errors.message && <span className="text-red-500 w-full mb-3">Message is required</span>}
      <Button className="w-full mt-4">Submit</Button>
    </form>
  );
};

export default Contact;
