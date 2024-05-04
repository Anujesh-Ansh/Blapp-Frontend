import React,{useState,useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);

    async function login(ev){
        ev.preventDefault();// stops from changing the page
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include', // to send cookies
            body: JSON.stringify({username, password})
        
        })

        if(response.status !== 200){
            alert('Login failed')
        }else{
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            })

        }
    }

    if(redirect){
        return <Navigate to={'/'} />
    }


  return (
    <form className='login' onSubmit={login}>
        <h1>Login</h1>
        <input type="text" placeholder='UserName' value={username} onChange={ev => setUsername(ev.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={ev => setPassword(ev.target.value)}/>
        <button>Login</button>
    </form>
  )
}

export default LoginPage