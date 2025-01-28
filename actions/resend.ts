'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);
const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export async function sendForm(prevState: { message: string }, formData: FormData) {
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(10).regex(phoneRegex, 'Invalid phone number'),
    message: z.string().min(1).max(500),
  });

  const validateFormData = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });
  if (!validateFormData.success) {
    const formFieldErrors = validateFormData.error.flatten().fieldErrors;

    return {
      message: ' validation error',
      errors: {
        name: formFieldErrors?.name,
        email: formFieldErrors?.email,
        phone: formFieldErrors?.phone,
        message: formFieldErrors?.message,
      },
      data: {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
      },
    };
  }
  //   if (!parse.success) {
  //     console.log(parse.error);
  //     // return parse.error.format();
  //     return { message: 'error' };
  //   }

  try {
    const { name, email, phone, message } = validateFormData.data;
    const { error } = await resend.emails.send({
      from: `${name}-${phone} <onboarding@resend.dev>`,
      to: ['kdhillon469@gmail.com'],
      subject: 'New Contact Form Submission',
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`, // (: )
    });
    if (error) {
      return { message: 'server error' };
    }
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'error', errors: {}, data: {} };
  }
}
