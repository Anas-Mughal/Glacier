import PropTypes from "prop-types";
import Product from "./Product";

function ProductsMaker({ styles, products }) {
  return (
    <ul className={styles}>
      {products.map((productData) => (
        <li key={productData.id} className="max-[950px]:w-[36.458vw] max-[950px]:h-[56.25vw] max-[950px]:flex max-[950px]:justify-center max-[950px]:items-center">
          <Product {...productData} />
        </li>
      ))}
    </ul>
  );
}

ProductsMaker.propTypes = {
  styles: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      flag: PropTypes.bool.isRequired,
      tag: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductsMaker;
