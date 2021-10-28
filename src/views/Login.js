import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';


export const Login = (props) =>{

    const [redirect, setRedirect] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;
        let encodedString = btoa(`${username}:${password}`)
        let myHeaders = new Headers();
        myHeaders.append('Authorization', `Basic ${encodedString}`)
        
        fetch('http://localhost:5000/api/token', {
            method: 'POST',
            headers: myHeaders
        }).then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data['token'])
                setRedirect('/')
            })
            .catch(err => console.error(err))
    }

    return (
        redirect ? <Redirect to={redirect} /> :
        <form onSubmit={handleSubmit}>
            <h3 className='text-center'>Login Here</h3>
            <div className='form-group'>
                <fieldset>
                    <label htmlFor='username'>Username</label>
                    <input type='text' className='form-control' name='username' placeholder='Username' />
                </fieldset>
                <fieldset>
                    <label htmlFor='password'>Password</label>
                    <input type='password' className='form-control' name='password' placeholder='Password' />
                </fieldset>
                <input type='submit' className='btn btn-primary' value='Login' />
            </div>
        </form>
    )
}