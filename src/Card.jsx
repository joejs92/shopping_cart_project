import { useState } from 'react'

function Card({title, image, price}){
    const [quantity, setQuantity] = useState(0);

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
                    <button>Add to Cart</button>
                </div>
            </div>
            
        </div>
    </>)
}

export default Card;