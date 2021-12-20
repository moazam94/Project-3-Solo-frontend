import { Link } from "react-router-dom";

const Cart = (props) => {
    return (
        <div>
            <main> Your Cart </main>
            { !props.userCart ? 
            <h2>Your cart is empty</h2>
            : 
            props.userCart.map((item, i) => (
                <div
                    key={i}
                    className="singleCartItem">
                        <h2>{item.name}</h2>
                        <h3>{item.description}</h3>
                        <img alt="itemInfo" src={item.image} />
                        <button
                            className="deleteButton"
                            onClick={() => {props.userCart.filter(item => item !== item)}}>remove</button>
                </div>
            ))
            }
            <Link to="/users/checkout"><button>Proceed to Checkout</button></Link>
        </div>

    )
}

export default Cart;