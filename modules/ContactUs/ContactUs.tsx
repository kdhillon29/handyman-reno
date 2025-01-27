import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <section className="bg-blue-50 dark:bg-slate-800 " id="contact">
      <div className=" py-2 sm:px-6 md:px-8 md:py-12 mb-12">
        
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className=" font-bold tracking-wide text-gray-900 dark:text-white text-4xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto text-xs  max-w-3xl  text-gray-600 dark:text-slate-400">
              Our team is ready to build your dreams
            </p>
          </div>

        {/* start of contact details */}
        
          <div className="grid place-items-center md:grid-cols-2 py-2 px-3 md:px-12  md:gap-6 animate-fade-in ">
            <div className="h-full pr-6">
              {/* <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                className aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut
                scelerisque sagittis ante, ac tincidunt sem venenatis ut.
              </p> */}
              <ul className="mb-6 md:mt-12 md:mb-0 flex flex-col gap-6 md:gap-16">
                <li className="flex gap-2  ">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4 ">
                    <h3 className="mb-2 font-medium leading-6 text-gray-900 dark:text-white">
                      Our Address
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400 tracking-tight leading-7  text-sm md:text-md">
                      1230 Maecenas Street Donec Road <br />
                      New York, EEUU
                    </p>
                    
                  </div>
                </li>
                <li className="flex gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2  font-medium leading-6 text-gray-900 dark:text-white">
                      Contact
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400 tracking-tight leading-7  text-sm md:text-md">
                      Mobile: +1 (123) 456-7890 <br/> 
                      Mail: tailnext@gmail.com
                    </p>
                    
                  </div>
                </li>
                <li className="flex gap-2 ">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 font-medium leading-6 text-gray-900 dark:text-white">
                      Working hours
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400 tracking-tight leading-7 text-sm md:text-md">
                      Monday - Friday: 08:00 - 17:00<br/>
                      Saturday &amp; Sunday: 08:00 - 12:00
                    </p>
                   
                  </div>
                </li>
              </ul>
            </div>
           
            <ContactForm />
          </div>
        
      </div>
    </section>
  );
}
