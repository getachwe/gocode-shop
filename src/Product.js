import './Product.css'
function Product(props){
     return(
    
    <div class="product-card">
        <div class="product-image">
        <img src={props.image}/>       
         </div>
       <div class="product-info">
         <h5>{props.title}</h5>
         <h6>${props.price}</h6>
       </div> 
    </div> 
   )    
 }
export default Product;