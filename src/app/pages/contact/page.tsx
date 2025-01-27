"use client";
import React from "react";

import Footer from "@/components/Footer/Footer";
import TopNavThree from "@/components/Header/TopNav/TopNavThree";
import MenuFurniture from "@/components/Header/Menu/MenuFurniture";
import BannerTop from "@/components/Home3/BannerTop";

const ContactUs = () => {
  return (
    <>
      <TopNavThree props="style-three bg-white" />
      <div id="header" className="relative w-full">
        <MenuFurniture props="bg-white" />
        {/* <MenuCategory /> */}
        <BannerTop
          props="bg-green py-3"
          textColor="text-black"
          bgLine="bg-black"
        />
      </div>
      <div className="contact-us md:py-20 py-10">
        <div className="container">
          <div className="flex justify-between max-lg:flex-col gap-y-10">
            <div className="left lg:w-2/3 lg:pr-4">
              <div className="heading3">Drop Us A Line</div>
              <div className="body1 text-secondary2 mt-3">
                Use the form below to get in touch with the sales team
              </div>
              <form className="md:mt-6 mt-4">
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 gap-y-5">
                  <div className="name ">
                    <input
                      className="border-line px-4 py-3 w-full rounded-lg"
                      id="username"
                      type="text"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                  <div className="email">
                    <input
                      className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                      id="email"
                      type="email"
                      placeholder="Your Email *"
                      required
                    />
                  </div>
                  <div className="message sm:col-span-2">
                    <textarea
                      className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                      id="message"
                      rows={3}
                      placeholder="Your Message *"
                      required
                    />
                  </div>
                </div>
                <div className="block-button md:mt-6 mt-4">
                  <button className="button-main">Send message</button>
                </div>
              </form>
            </div>
            <div className="right lg:w-1/4 lg:pl-4">
              <div className="item">
                <div className="heading4">Our Store</div>
                <p className="mt-3">Khalifa Bakaraha, Mogadishu, Somalia</p>
                <p className="mt-3">
                  Phone:{" "}
                  <span className="whitespace-nowrap">+252-615-544-771</span>
                </p>
                <p className="mt-1">
                  Email:{" "}
                  <span className="whitespace-nowrap">
                    Bashaashcf@gmail.com
                  </span>
                </p>
              </div>
              <div className="item mt-10">
                <div className="heading4">Open Hours</div>
                <p className="mt-3">
                  Sat - Thru:{" "}
                  <span className="whitespace-nowrap">7:00am - 8:00pm</span>
                </p>
                <p className="mt-3">
                  Friday: <span className="whitespace-nowrap">Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
