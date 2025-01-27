import React from "react";
import TopNavThree from "@/components/Header/TopNav/TopNavThree";
import MenuFurniture from "@/components/Header/Menu/MenuFurniture";
import SliderFurniture from "@/components/Slider/SliderFurniture";
import BannerTop from "@/components/Home3/BannerTop";
import Banner from "@/components/Furniture/Banner";
import productData from "@/data/Products2.json";
import FeatureProduct from "@/components/Furniture/FeatureProduct";
import FlashSale from "@/components/Furniture/FlashSale";
import TabFeatures from "@/components/Furniture/TabFeatures";
import Benefit from "@/components/Home1/Benefit";
import Instagram from "@/components/Furniture/Instagram";
import Brand from "@/components/Home1/Brand";
import Footer from "@/components/Footer/Footer";
import ModalNewsletter from "@/components/Modal/ModalNewsletter";

export default function HomeFurniture() {
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
        <SliderFurniture />
      </div>
      <Banner />
      <FeatureProduct data={productData} start={0} limit={4} />
      <FlashSale />
      <TabFeatures data={productData} start={0} limit={8} />
      <Benefit props="md:pt-20 pt-10" />
      {/* <Testimonial data={dataTestimonial} limit={4} /> */}
      <Instagram />
      <Brand />
      <Footer />
      <ModalNewsletter />
    </>
  );
}
