import ProductContext from "./ProductContext";
import { useContext } from "react";
import "./CartProducts.css";
function CartProducts() {
  const { cart } = useContext(ProductContext);
  const { totalPrice } = useContext(ProductContext);
  const { totalItem } = useContext(ProductContext);
  const cartItem =(<ol className="cart-items"> 
  {  cart.map((item) => (<li><img src={item.image}/><br/>
    <span className="price">title:</span><br/>{item.title} <br/><span className="price">price:</span> {item.price}$<br/><br/></li>))}
  </ol>)

  return (
    <div className="cart">
      <span className ="mycart"><br/>My Cart</span>
      {cartItem}
      <div className="total">
        <span>Total Amount:</span>
        <span>{totalPrice}$</span>
      </div>
      <div className="total">
        <span>Total Items:</span>
        <span>{totalItem}</span>
      </div>
      <div className="actions">
        <button className="button--alt">Close</button>
        <button className="button">Order</button>
      </div>
    </div>
  );
}
export default CartProducts;
