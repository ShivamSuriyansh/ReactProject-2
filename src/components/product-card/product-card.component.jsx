import { useContext } from "react";

import "./product-card.styles.scss";

import Button from "../buttons/buttons.component";
import { CartContext } from "../../contexts/cart.context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
      <div className="product-card-container">
        <ToastContainer autoClose={500} /> 
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart}>
          Add to Cart
        </Button>
      </div>
  );
};

export default ProductCard;
