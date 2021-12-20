import { useState } from 'react';
import axios from 'axios';

const Login = (props) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const submitForm = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/users/login`, { email, password })
            .then((response) => {
                console.log(response)
                localStorage.setItem('userId', response.data.user.id)
                props.setUser(response.data.user.id)
            })
    }

    return (
        <form onSubmit={submitForm} >
            <div>
                <label htmlFor="email">Email:</label>
                <input value={email} onChange={(e) => {setEmail(e.target.value) }} />
            </div>
            
            <div>
                <label htmlFor="password">Password:</label>
                <input value={password} type="password" onChange={(e) => {setPassword(e.target.value) }} />
            </div>
            
            <div>
                <input type="submit" value="Login" />
            </div>
        </form>
    )
}

export default Login;