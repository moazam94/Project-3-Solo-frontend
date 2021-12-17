import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
            <ul>
                { props.user.id ?
                <>
                    <li>
                        <Link to='/users'>Create Account</Link>
                    </li>
                    <li>
                        <Link to='/users/login'>Log In</Link>
                    </li>
                </>
                :
                <>
                    <li className="nav-links-logged-in">
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className="nav-links-logged-in">
                        <Link to='/users/cart'>Cart</Link>
                    </li>
                    <li className="nav-links-logged-in">
                        <Link to='/users/orders'>Orders</Link>
                    </li>
                    <li className="nav-links-logged-in">
                        <Link to='/uesrs/checkout'>Checkout</Link>
                    </li>
                    <li className="nav-links-logged-in" onClick={() => {
                        localStorage.removeItem('userId')
                        /// probably another action here
                    }}>
                        Log Out
                    </li>
                </>                  
                }
            </ul>
        </nav>
    )
}

export default Navbar;
 