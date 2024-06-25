import PropTypes from "prop-types";
import Product from "./Product";

function ProductsMaker({ ulstyles, products, listyles, pstyles }) {
  return (
    <ul className={ulstyles}>
      {products.map((productData) => (
        <li key={productData.id} className={listyles}>
          <Product {...productData} pstyles={pstyles} />
        </li>
      ))}
    </ul>
  );
}

ProductsMaker.propTypes = {
  ulstyles: PropTypes.string.isRequired,
  listyles: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgSrc: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      flag: PropTypes.bool.isRequired,
      tag: PropTypes.string.isRequired,
    })
  ).isRequired,
  pstyles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductsMaker;
