// app/shop/page.jsx
import Main from "./ShopSections/Main";
import Section1 from "./ShopSections/Section1";
import Section2 from "./ShopSections/Section2";
export const metadata = {
  title: "Glacier | SHOP",
  description: "Finest Drinking Water",
};
function Shop() {
  return (
    <Main>
      <Section1 />
      <Section2 />
    </Main>
  );
}
export default Shop;
