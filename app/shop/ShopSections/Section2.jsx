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
    <section className="flex w-full gap-[1.563vw] mb-[20vw]">
      <div className="w-[12.24vw] h-[13.021vw] bg-[#ffffff1c] backdrop-blur-lg rounded-[0.5vw] p-[1.25vw] flex flex-col justify-center gap-[0.5vw]">
        <p className="first-letter:text-primary first-letter:font-bold">
          | Categories
        </p>
        <ul
          id="choice"
          className="flex flex-col justify-center gap-[0.5vw] pl-[.5vw] h-full"
        >
          {categories.map((category) => (
            <li key={category} data-filter={category.toLowerCase()} className="">
              <button
                className="focus:outline-none"
                onClick={() => handleCategoryChange(category)}
              >
                <p
                  className={`font-light cursor-pointer ${
                    selectedCategory === category
                      ? "text-primary font-bold"
                      : ""
                  }`}
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
        styles="grid grid-cols-3 gap-[1.563vw]"
      />
    </section>
  );
}

export default Section2;
