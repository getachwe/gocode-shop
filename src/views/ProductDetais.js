import { useParams } from "react-router";
import { useEffect, useState } from "react";
function ProductDetais() {
  const [productsdetais, setproductsdetais] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchproducts();
  }, []);

  function fetchproducts() {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setproductsdetais(data));
  }
  return (
    <div>
    {setproductsdetais.id}
    {setproductsdetais.title}
    {setproductsdetais.image}
    {setproductsdetais.price}
    </div>
  );
}
export default ProductDetais;
