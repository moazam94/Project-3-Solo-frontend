import { useState } from 'react';
import axios from 'axios';

const CreateAccount = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');


const submitForm = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:3001`, {email, password})
        .then((response) => {
            console.log(response);
            localStorage.setItem('userId', response.data.id)
            props.setUser(response.data.user.id)
        })
        .catch((error) => {
            setEmailError(error.message)
            console.log(emailError)
        })
    }

    return (
        <form onSubmit={submitForm} >
            <div>
                <label htmlFor='name'>Name:</label>
                <input value={name} onChange={(e) => {setName(e.target.value)}} />
            </div>

            <div>
                <label htmlFor='email'>Email:</label>
                <input value={email} onChange={(e) => {setEmail(e.target.value)}} />
            </div>

            <div>
                <label htmlFor='password'>Password:</label>
                <input value={password} onChange={(e) => {setPassword(e.target.value)}} />
            </div>

            <div>
                <input type='submit' value='CreateAccount' />    
            </div> 
        </form>
    )
}

export default CreateAccount;