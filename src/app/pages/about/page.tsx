"use client";
import React from "react";
import Image from "next/image";
import Benefit from "@/components/Home1/Benefit";
import Newsletter from "@/components/Home4/Newsletter";
import Instagram from "@/components/Furniture/Instagram";
import Brand from "@/components/Home1/Brand";
import Footer from "@/components/Footer/Footer";
import TopNavThree from "@/components/Header/TopNav/TopNavThree";
import MenuFurniture from "@/components/Header/Menu/MenuFurniture";
import BannerTop from "@/components/Home3/BannerTop";
import Banner from "@/components/Furniture/Banner";

const AboutUs = () => {
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
      <div className="about md:pt-20 pt-10">
        <div className="about-us-block">
          <div className="container">
            <div className="text flex items-center justify-center">
              <div className="content md:w-5/6 w-full">
                <div className="heading3 text-center">About Bashaash Group</div>
                <div className="body1 text-center md:mt-7 mt-5">
                  Bashaash Group is dedicated to transforming living spaces with
                  our exquisite range of furniture. We specialize in creating
                  elegant, functional pieces that enhance the beauty and comfort
                  of any home. Our commitment to quality and craftsmanship is
                  evident in every item we offer, from timeless classics to
                  contemporary designs. With a passion for innovation and a
                  focus on customer satisfaction, Bashaash Group continues to
                  set the standard in the furniture industry.
                </div>
              </div>
            </div>
            <Banner />
          </div>
        </div>
      </div>
      <Benefit props="md:pt-20 pt-10" />
      <Newsletter props="bg-green md:mt-20 mt-10" />
      <Instagram />
      <Brand />
      <Footer />
    </>
  );
};

export default AboutUs;
