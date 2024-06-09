import PropTypes from "prop-types";
import Product from "./Product";

function ProductsMaker({ styles, products }) {
  return (
    <ul className={styles}>
      {products.map((productData) => (
        <li key={productData.id}>
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
