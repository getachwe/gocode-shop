import "./Product.css";
import Product from "./Product";
import Spinner from "./Spinner"
import { Link } from "react-router-dom";
const Products = ({ products }) => (
  <section className="products">
  {!products.length && <Spinner/>}
    {products.map(({title,image,id,price,description}) => (
      <Link to={`/products/${id}`}>
      <Product
        key={id}
        title={title}
        image={image}
        price={price}
        description={description}
      ></Product>
      </Link>
    ))}
  </section>
);
export default Products;
