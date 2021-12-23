import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect  } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Cart from './pages/CartList';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import './App.css';
import axios from 'axios';


function App() {

  const [ user, setUser ] = useState({});
  const [ userCart, setUserCart ] = useState([]);
  const [ userOrders, setUserOrders ] = useState([]);

  const fetchUser = () => {
    const userId = localStorage.getItem('userId');
    if(userId) {
      axios.get(`http://localhost:3001/users`, {
        headers: {
          Authorization: userId
        }
      }).then((response) => {
        console.log(response)
        setUser(response.data.user)
      })
    }
  }

  useEffect(fetchUser, [])

//   const currentOrder = async () => {
//     const userId = localStorage.getItem('userId')
//     try {
//       let response = await axios.get(`http:localhost:3001/users/cart`)
//       setUserCart(response.data)
//       let cart = []
//       for (let item of response.data) {
//         cart.push(item.name)
//       }
//     } catch (error) {
//       console.log (error)
//     }
//     return userCart.map((item, i) => {
//       <div>
//         {item.name}
//       </div>
//     })
//   }
// }


return (
  <div className="App">

    <Navbar className="App-header" user={user} setUser={setUser} />

    <Routes>

      <Route path="/users/login" element={
        user.id ? <Navigate to="/home"/> :
        <Login user={user} setUser={setUser} />} />

      <Route path="/users" element={
        user.id ? <Navigate to="/home"/> :
        <CreateAccount user={user} setUser={setUser} />} />

      <Route path="/home" element={<Home user={user} setUser={setUser} userCart={userCart} setUserCart={setUserCart} />} /> 

      <Route path="/users/cart" element={<Cart userCart={userCart} setUserCart={setUserCart} />} /> 

      <Route path="users/orders" element={<Order userOrders={userOrders} />} /> 

      <Route path="/users/checkout" element={<Checkout userCart={userCart} userOrders={userOrders} setUserOrders={setUserOrders} />} /> 

    </Routes>

  </div>
);
}

export default App;
