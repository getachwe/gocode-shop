import Header from "./Header";
import CartProducts from "./CartProducts";
import "./Product.css";
import Products from "./Products";
import "./App.css";
import { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import { Route, Switch } from "react-router";
import ProductDetais from "./views/ProductDetais";
function App() {
  const [products, setproducts] = useState([]);
  const [choice, setchoice] = useState("All categories");
  const groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});
  const categories = Object.keys(groupBy(products, "category"));

  function change(val) {
    setchoice(val);
  }
  function fetchproducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setproducts(data));
  }
  useEffect(() => {
    fetchproducts();
  }, []);

  const [cart, setCart] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const [totalItem, settotalItem] = useState(0);

  function addProduct(title) {
    const arrProduct = products.filter((p) => p.title === title);
    const MyProducts = {
      id: cart.length + 1,
      title: arrProduct[0].title,
      price: arrProduct[0].price,
      Image: arrProduct[0].Image,
      description: arrProduct[0].description,
      category: arrProduct[0].category,
    };
    setCart([...cart, MyProducts]);
    settotalItem(cart.length + 1);
    settotalPrice(totalPrice + MyProducts.price);
  }
  return (
    <ProductContext.Provider
      value={{ addProduct, totalPrice, totalItem, cart }}
    >
      <div className="App">
        <Switch>
          <Route path="/products/:id">
            <ProductDetais />
          </Route>
        </Switch>
        <CartProducts />
        <Header categories={categories} change={change} />

        <Products
          products={products.filter(
            (prop) => prop.category === choice || choice === "All categories"
          )}
        />
      </div>
    </ProductContext.Provider>
  );
}
export default App;
