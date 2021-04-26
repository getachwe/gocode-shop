import Header from './Header'
import './Product.css';
import Products from './Products';
import './App.css';
//import Togle from './Togle';
import { useEffect, useState } from 'react';
function App() { 
  const [products, setproducts] = useState([]);  
  const[choice,setchoice]=useState("")
  const groupBy = (xs, key) => xs.reduce((rv, x) => {
    (rv[x[key]] = true || []);
    return rv;
  }, {});
const categories = Object.keys(groupBy(products, 'category'));

function change(val)
{
  setchoice(val)
}


function fetchproducts() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setproducts(data));
}

useEffect(() => {
  fetchproducts();
}, []);

  return (
  <div className="App">
 
 <Header categories={ categories} change={change}/>
<Products products={ products.filter(prop => prop.category===choice)}/>
</div>);}
export default App;
