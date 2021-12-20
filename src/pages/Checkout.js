import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Checkout = (props) => {

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [cardNumber, setCardNumber] = useState('')

    const completeOrder = async () => {
        const userId = localStorage.getItem('userId')

        try {
            let response = await axios.post(`http://localhost:3001/orders`, {
                userId: userId,
                address: address,
                city: city,
                state: state,
                zip: zip,
                cardNumber: cardNumber
            }
          )
           // props.setUserOrders(props.userCart)
           console.log(props.userCart.map(book => book.id))
           // let previousOrders = [];
           // let res = await axios.post(`http://localhost:3001/users/orders`)
           // console.log(res) 
           // for (let order of res.data.orders) {
           //     previousOrders.push(order)
           // }
       }    catch (error) {
            console.log(error)
            }
        }
        let sumTotal = 0;
        return(
            <>
                <main>Complete Your Order</main>

                {props.userCart.map((item, i) => {
                    sumTotal += item.price
                    return (
                        <div key={i} className="checkoutItem">
                            <h3>{item.name}</h3>
                            <h3>{item.price}</h3>

                        </div>
                    )
                })
                }
                <h3>Total: ${sumTotal}</h3>
                <form>
                <input type="text" value={address} placeholder="Address" onChange={(e) => {setAddress(e.target.value)}} />
                <input type="text" value={city} placeholder="City" onChange={(e) => {setCity(e.target.value)}} />
                <input type="text" value={state} placeholder="State" onChange={(e) => {setState(e.target.value)}} />
                <input type="text" value={zip} placeholder="Zip Code" onChange={(e) => {setZip(e.target.value)}} />
                <input type="text" value={cardNumber} placeholder="Credit Card Number" onChange={(e) => {setCardNumber(e.target.value)}} />
                </form>
                <Link to='/users/order'>
                    <button onClick={completeOrder}>Complete Purchase</button>
                </Link>
            </>
        )
}

export default Checkout;

