"use client";
// import { useEffect, useState } from "react";
import Link from "next/link";
import products from "../../../data/json/product.json";
import ProductsMaker from "../../Components/ProductsMaker";

function Section3() {
  // const [displayedProducts, setDisplayedProducts] = useState(products);

  // useEffect(() => {
  //   const updateDisplayedProducts = () => {
  //     setDisplayedProducts(
  //       products.length === 4 && window.innerWidth >= 950
  //         ? products.slice(0, 3)
  //         : products
  //     );
  //   };

  //   updateDisplayedProducts();
  // }, []);

  return (
    <section className="flex flex-col items-center w-full gap-[2.5vw] max-[950px]:gap-[6.25vw]">
      <div>
        <h1 className="max-[950px]:text-[6vw] max-[950px]:flex max-[950px]:justify-center max-[950px]:items-center max-[950px]:gap-[3vw]">
          CHOOSE YOUR <span className="text-primary">WATER</span>
        </h1>
        <h4 className="text-[0.833vw] text-center max-[950px]:text-[2.5vw]">
          Bottles We Deliver
        </h4>
      </div>
      <ProductsMaker
        products={products}
        ulstyles={
          "flex items-center justify-center w-full gap-[3vw] max-[950px]:flex-col"
        }
        liStyles={"w-[75%]"}
      />
      <Link
        href="/shop"
        className="relative flex items-center justify-center text-white rounded-full group py-[0.75%] px-[3.5%] max-[950px]:py-[5%] max-[950px]:px-[25%]  hover:border-primary border-transparent border-[0.0625vw] group-hover:border-[0.0625vw]"
      >
        <p className="absolute inset-0 rounded-full -z-[1] bg-gradient-to-br from-secondary to-primary group-hover:opacity-0 transition-all ease-linear duration-[0.3s] py-[0.75%] px-[3.5%] max-[950px]:py-[5%] max-[950px]:px-[25%]"></p>
        <h5 className="transition-all ease-linear duration-[0.3s] group-hover:text-primary  text-nowrap">
          All Products
        </h5>
      </Link>
    </section>
  );
}

export default Section3;
