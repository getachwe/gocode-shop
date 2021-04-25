import './Product.css';
import Product from './Product';
const Products = ({ products}) =>
	<section className="products">
		  {products.map(p => <Product key={p.id} title={p.title} image={p.image} price={p.price}></Product>)}	
	</section>;
 export default Products;