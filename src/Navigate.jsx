import { Link } from "react-router-dom";

function Navigate({cartAmount}){

    return(
        <>
        <div className="nav-content">
            <Link to="home">Home</Link>
            <Link to="shop">Shop</Link>
        </div>
        <div className="title">
            <h1>Cheap Crap Shopping Center</h1>
        </div>
        <div className="nav-content">
            <p>Cart Items: {cartAmount}</p>
            <button>Checkout</button>
        </div>
        </>
    )
}

export default Navigate;