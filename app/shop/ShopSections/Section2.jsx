"use client";
import products from "../../../data/json/productPage.json";
import ProductsMaker from "../../Components/ProductsMaker";
import { useState } from "react";
function Section2() {
  const categories = ["All", "Bottles", "Deals", "Caps"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.tag === selectedCategory.toLowerCase()
        );

  return (
    <section className="flex w-full gap-[1.563vw] max-[950px]:gap-[5vw] max-[950px]:flex-col items-start">
      <div className="  bg-[#ffffff1c] backdrop-blur-lg rounded-[0.5vw] max-[950px]:rounded-[2vw] p-[1.25vw] max-[950px]:p-[3.25vw] items-start flex flex-col max-[950px]:gap-[5vw] justify-center gap-[1.25vw] max-[950px]:w-full">
        <p className=" first-letter:text-primary first-letter:font-bold max-[950px]:text-[4vw]">
          | Categories
        </p>
        <ul
          id="choice"
          className="flex flex-col justify-evenly gap-[0.5vw] pl-[.5vw] w-full  max-[950px]:flex-row "
        >
          {categories.map((category) => (
            <li
              key={category}
              data-filter={category.toLowerCase()}
              className="flex items-center justify-start"
            >
              <button
                className="focus:outline-none"
                onClick={() => handleCategoryChange(category)}
              >
                <p
                  className={`font-light max-[950px]:font-medium cursor-pointer ${
                    selectedCategory === category
                      ? "text-primary font-bold"
                      : ""
                  }  max-[950px]:text-[4vw]`}
                >
                  {category}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ProductsMaker
        products={filteredProducts}
        styles="grid grid-cols-3 max-[950px]:grid-cols-2 gap-[1.563vw]"
      />
    </section>
  );
}

export default Section2;
