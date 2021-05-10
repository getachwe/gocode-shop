import { useContext } from "react";
import "./Product.css";
import ProductContext from "./ProductContext";
function Product({ title, image, id, price, description }) {
  
  const { addProduct } = useContext(ProductContext);
  return (
    <div class="product-card">
      <div class="product-image">
        <img src={image} alt={title} title={description} />
      </div>
      <div class="product-info">
      
        <h5>{title}</h5>

        <h6>${price}</h6>
      </div>
      <button onClick={() => addProduct(title)}>add product</button>
    </div>
  );
}
export default Product;
