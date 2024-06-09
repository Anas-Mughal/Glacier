// app/shop/page.jsx
import Head from "next/head";
import Main from "./ShopSections/Main";
import Section1 from "./ShopSections/Section1";
import Section2 from "./ShopSections/Section2";

function Shop() {
  return (
    <>
      <Head>
        <title>Glacier | Shop</title>
        <meta
          name="description"
          content="Shop the finest drinking water from Glacier."
        />
      </Head>
      <Main>
        <Section1 />
        <Section2 />
      </Main>
    </>
  );
}
export default Shop;
