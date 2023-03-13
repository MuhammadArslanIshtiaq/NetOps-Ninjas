import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../../components/navigation/Footer";
import Container from "../../components/utils/Container";
import { ArrowFullTwoIcon, UploadIcon } from "../../components/utils/Icons";



const SupportPage = () => {
  const [firstname, setfirstname] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

     
      const res = await fetch("/api/mail", {
        body: JSON.stringify({
          firstname: firstname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }
    console.log(fullname, email, subject, message);
  };
  return (
    <>
      <Head>
        <title>Support - Netops Ninjas</title>
      </Head>
      <main className="bg-section">
        <section className="relative bg-section text-white py-12 sm:py-20">
          <span className="absolute inset-0">
            <Image fill src="/assets/images/bg-lines.svg" alt="..." />
          </span>
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center my-20">
                <div className="mb-24 lg:mb-0 text-center lg:text-left">
                  <h5 className="inline-block text-lg font-extrabold uppercase text-gradient mb-4">
                    24/7 Support
                  </h5>
                  <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight sm:leading-tight xl:leading-tight mb-6">
                    Get Our Help Fast
                  </h2>
                  <p className="mb-16 lg:max-w-xl text-[1.375rem] text-gray-200">
                    Lorem ipsum dolor sit amet consectetur. Justo in rho orci
                    velit placerat enim. Convallis vitae enim vitae mauris
                    cursus vitae urna amet.
                  </p>
                  <Link
                    href="/contact"
                    className="bg-g-primary text-white text-lg font-semibold rounded-xl py-5 px-10 hover:opacity-90 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="order-first lg:order-last py-16 lg:py-0">
                  <div className="min-h-[25rem] sm:min-h-[37.5rem] lg:min-h-[25rem] h-full relative">
                    <span className="absolute z-20 h-full w-full scale-[1.15]">
                      <Image fill src="/assets/images/bg-image.svg" alt="..." />
                    </span>
                    <span className="absolute z-20 top-8 lg:top-28 left-5 lg:left-8 h-20 w-20">
                      <Image
                        fill
                        src="/assets/images/icon-24hrs.svg"
                        alt="..."
                      />
                    </span>
                    <span className="absolute z-20 bottom-0 lg:bottom-24 right-0 lg:-right-12 h-40 w-40">
                      <Image fill src="/assets/images/icon-0.svg" alt="..." />
                    </span>
                    {/* == */}
                    <span className="absolute w-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-blue-overlay-1" />
                    <span className="absolute w-72 bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-pink-overlay-1" />
                    <Image
                      className="object-contain z-10 rounded-full"
                      fill
                      src="/assets/images/hero-image-1.png"
                      alt="..."
                    />
                    <span className="hidden lg:block absolute -bottom-72 left-[25%] -translate-x-1/2">
                      <ArrowFullTwoIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="bg-section text-white pb-12 sm:pb-20 lg:mt-56">
          <Container>
            <div className="mb-12 max-w-4xl mx-auto text-center pt-2">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight sm:leading-tight xl:leading-tight">
               Contact us
              </h2>
              <p className="mt-6 text-[1.375rem] text-gray-400">
              Should you wish to contact us, please email us or submit your message via the form.
              </p>
            </div>
            <div className="mx-auto max-w-6xl">
              <form  onSubmit={handleSubmit}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <li>
                    <div>
                      <label
                        className="capitalize block text-lg font-semibold mb-2"
                        htmlFor="firstname"
                      >
                        First Name
                      </label>
                      <input
                        className="w-full p-5 rounded-lg bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="John"
                        required
                        onChange={(e) => {
                          setfirstname(e.target.value);
                        }}
                      />
                    </div>
                  </li>
                  <li>
                    <div>
                      <label
                        className="capitalize block text-lg font-semibold mb-2"
                        htmlFor="lastname"
                      >
                        Last Name
                      </label>
                      <input
                        className="w-full p-5 rounded-lg bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </li>

                  <li>
                    <div>
                      <label
                        className="capitalize block text-lg font-semibold mb-2"
                        htmlFor="phone-number"
                      >
                        Phone Number
                      </label>

                      <div className="relative mt-1 rounded-lg">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                          <label htmlFor="country" className="sr-only">
                            Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            autoComplete="country"
                            className="h-full rounded-l-lg bg-info border-0 border-r border-gray-500 py-0 pl-3 pr-7 sm:text-sm"
                          >
                            <option>UK</option>
                            <option>US</option>
                            <option>CA</option>
                            <option>EU</option>
                          </select>
                        </div>
                        <input
                          type="text"
                          name="phone-number"
                          id="phone-number"
                          className="block w-full rounded-lg py-5 pl-20 bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
                          placeholder="+92 (000) 000 0000"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <label
                        className="capitalize block text-lg font-semibold mb-2"
                        htmlFor="subject"
                      >
                        Subject
                      </label>
                      <select
                       onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                        id="subject"
                        name="subject"
                        className="w-full p-5 rounded-lg bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
                      >
                        <option selected disabled value="-">
                          Please Select
                        </option>
                        <option value="Support">Support</option>
                        <option value="Sales">Sales</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div>
                      <label
                        className="capitalize block text-lg font-semibold mb-2"
                        htmlFor="service"
                      >
                        Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full p-5 rounded-lg bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
                      >
                        <option selected disabled value="-">
                          Please Select
                        </option>
                        <option value="Networking">Networking</option>
                        <option value="Infrastructure">Infrastructure</option>
                        <option value="Clouds">Clouds</option>
                        <option value="Firewalls">Firewalls</option>
                      </select>
                    </div>
                  </li>
                  <li className="sm:col-span-2">
                    <div>
                      <label
                        className="capitalize block text-lg font-semibold mb-2"
                        htmlFor="Message"
                      >
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="resize-none w-full p-5 rounded-lg bg-info border border-gray-500 focus:border-l-pink-500 focus:border-t-pink-500 focus:border-r-secondary focus:border-b-secondary  focus-visible:outline-0 placeholder:text-gray-300"
                        type="text"
                        id="Message"
                        name="Message"
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                      />
                    </div>
                  </li>
                  <li className="sm:col-span-2">
                    <div>
                      <label className="capitalize block text-lg font-semibold mb-2">
                        Choose File To Upload
                      </label>
                      <div className="flex justify-center rounded-lg bg-info border-2 border-dashed border-gray-300 px-6 py-12">
                        <div className="space-y-1 text-center">
                          <span className="text-secondary">
                            <UploadIcon />
                          </span>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer text-blue-400 hover:text-blue-500 focus:text-blue-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1 text-white">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-200">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-g-primary text-white text-lg font-semibold rounded-lg py-5 px-10 hover:opacity-90 transition-all duration-300"
                    >
                      Submit
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </Container>
        </section>
        {/* <CtaSection /> */}
        <Footer/>
      </main>
    </>
  );
};

export default SupportPage;
