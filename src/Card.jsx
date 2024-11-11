import { useState } from 'react'
import { useOutletContext } from "react-router-dom";

function Card({title, image, price, handleClick}){
    const [quantity, setQuantity] = useState(0);
    const [cart, setCart] = useOutletContext();

    function increment(){
        const numberedQuantity = quantity*1;
        if(numberedQuantity >= 0){
            setQuantity(numberedQuantity + 1);
        }
        else{
            setQuantity(0);
        }
    }

    function decrement(){
        if(quantity > 0){
            setQuantity(quantity - 1);
        }
        else{
            setQuantity(0);
        }
    }

    function updateCart(amount){
        if(isNaN(amount)){
            window.alert("Not a valid quantity");
        }
        else{
            setCart((cart)*1 + (amount)*1);
        }
      }
      //works as is, but it interprets keyboard input
      //as strings even if a number is typed in.
      //Could use Regex to check if quantity entered is
      //equal to a natural number.

    return (<>
        <div className="card">
            <div className="img_container" style={{backgroundImage: `url("${image}")`}}></div>
            <div className="title_container">
                <h2>{title}</h2>
            </div>
            <div className="price_container">
                <p>{price}</p>
            </div>
            <div className="quantity_container">
                <div className='quantity'>
                    <input 
                    value={quantity}
                    onChange={e=>{
                        setQuantity(e.target.value)
                    }} 
                    />
                </div>
                <div className='buttons'>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                </div>
                <div className='cart_button'> 
                    <button onClick = {()=>updateCart(quantity)}>Add to Cart</button>
                </div>
            </div>
        </div>
    </>)
}

export default Card;