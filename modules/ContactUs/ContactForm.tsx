'use client';

import { sendForm } from '@/actions/resend';
import Input from '@/components/Input';
import { useActionState, useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
import { FaSpinner } from 'react-icons/fa';
// import { useFormState } from "react-dom";
interface Errors {
  name?: string[];
  email?: string[];
  phone?: string[];
  message?: string[];
}
export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>();
  const [reset, setReset] = useState(false);
  const [state, formAction] = useActionState(sendForm, {
    message: '',
    errors: {},
    data:{}
  });
  useEffect(() => {
    setErrors(state.errors);
  }, [state.errors]);
  useEffect(() => {
    if (state.message === 'success') {
      setTimeout(() => {
        console.log('reset');
        setReset(true);
      }, 3000);
    }
  }, [state.message]);
  
  return (
    <div className=" h-fit bg-blue-100/30 w-full md:p-3 "  id="form">
      <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Ready to Get Started?</h2>
      <form id="contactForm" action={formAction} className="space-y-6 w-full">
        <div className="mb-6">
          <div className="space-y-2 mb-4">
            <Input
              label="Name"
              id="name"
              name="name"
              defaultValue={state.data?.name as string || ''}
              autoComplete='name'
              type="text"
              placeholder="Your name"
              required
            />
            {errors?.name && <p className="text-red-500 text-sm">{errors.name.join('\n')}</p>}
          </div>
          <div className="space-y-2 mb-4">
            <Input
              label="Email"
              id="email"
              name="email"
              onFocus={() => {
                setErrors({ ...errors, email: [] });
              }}
              defaultValue={state.data?.email as string || ''}
              autoComplete='email'
              type="email"
              placeholder="Your email"
              required
            />
            {errors?.email && <p className="text-red-500 text-sm">{errors.email.join('\n')}</p>}
          </div>

          <div className="space-y-2 mb-4">
            <Input
              label="phone"
              className={` ${errors?.phone?.length ? 'border-red-500' : 'border-none'}`}
              onFocus={() => {
                setErrors({ ...errors, phone: [] });
              }}
              id="phone"
              name="phone"
              defaultValue={state.data?.phone as string || ''}
              autoComplete='phone'
              type="text"
              placeholder="Your phone"
              required
            />
            {errors?.phone && <p className="text-red-500 text-sm">{`${errors.phone.join('&')}`}</p>}
          </div>

          <div className="space-y-2 mb-4">
            <textarea
              id="textarea"
              onFocus={() => {
                setErrors({ ...errors, message: [] });
              }}
              name="message"
              defaultValue={state.data?.message as string || ''}
              cols={30}
              rows={5}
              placeholder="Write your message..."
              className="w-full bg-neutral-50 text-gray-700 p-3 rounded-lg shadow-md
                focus:outline-none
                focus:ring-2
                focus:ring-primary/40
                placeholder:text-yellow-800/40"
            ></textarea>
            {errors?.message && <p className="text-red-500 text-sm">{errors.message.join('\n')}</p>}
          </div>
        </div>
        <div className="text-center">
          <SubmitButton />
        </div>
        {/* {state.message && <p className='text-black'>{`message demo:${state.message}`}</p>} */}

        {state.message === 'success' && !reset && (
          <div className="flex items-center space-x-2 text-green-500 text-sm  ">
            <BiCheckCircle color="green" />
            <p aria-live="polite" className="text-base  not-sr-only">
              {' '}
              We have received your message.
              <br />
              We will get back to you shortly.{' '}
            </p>
          </div>
        )}
        {state.message == 'server error' ||
          (state.message == ' error' && (
            <div className="flex items-center space-x-2 text-red-500 text-sm">
              <BiErrorCircle color="red" size={24} />
              <p aria-live="polite" className="text-base not-sr-only">
                Unable to send message.Please try again later.
              </p>
            </div>
          ))}
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-primary/70 text-white text-center px-6 py-3 font-xl rounded-md sm:mb-0"
    >
      {pending ? (
        <p className="flex items-center justify-center gap-2">
          <strong>Sending</strong>
          <FaSpinner className="animate-spin " size={18} color="white" />
        </p>
      ) : (
        'Send'
      )}
    </button>
  );
}
