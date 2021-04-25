import './Product.css'
function Product(props){
     return(
    
    <div class="product-card">
        <div class="product-image">
        <img src={props.image} alt={props.title} title={props.description}/>       
        </div>
       <div class="product-info">
         <h5>{props.title}</h5>

         <h6>${props.price}</h6>
       </div> 
    </div> 
   )    
 }
export default Product;