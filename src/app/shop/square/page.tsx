"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import ShopFilterDropdown from "@/components/Shop/ShopFilterDropdown";
import productData from "@/data/Products2.json";
import Footer from "@/components/Footer/Footer";
import MenuFurniture from "@/components/Header/Menu/MenuFurniture";
import BannerTop from "@/components/Home3/BannerTop";
import TopNavThree from "@/components/Header/TopNav/TopNavThree";

export default function FilterDropdown() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const category = searchParams.get("category");

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
      <div className="shop-square">
        <ShopFilterDropdown
          data={productData}
          productPerPage={12}
          dataType={type}
        />
      </div>
      <Footer />
    </>
  );
}
