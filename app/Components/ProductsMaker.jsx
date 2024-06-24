import PropTypes from "prop-types";
import Product from "./Product";

function ProductsMaker({ ulstyles, products, listyles }) {
  return (
    <ul className={ulstyles}>
      {products.map((productData) => (
        <li key={productData.id} className={listyles}>
          <Product {...productData} />
        </li>
      ))}
    </ul>
  );
}

ProductsMaker.propTypes = {
  listyles: PropTypes.string,
  ulstyles: PropTypes.string.isRequired,
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
