import './Product.css';
import Product from './Product';
const Products = ({ products1}) =>
	<section className="products">
		{props.map(p => <Product key={p.id} title={p.title} image={p.image} price={p.price}></Product>)}	
	</section>;
 export default Products;