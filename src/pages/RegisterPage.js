import React,{useState} from 'react'

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        
        })

        if(response.status !== 200){
            alert('Registration failed')
        }else{
            alert('Registration successful')
        }
        
    }

    return (
        <form className='register' onSubmit={register}>
            <h1>Register</h1>
            <input type="text" placeholder='UserName' value={username} onChange={ev => setUsername(ev.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange={ev => setPassword(ev.target.value)}/>
            <button>Register</button>
        </form>
    )
}

export default RegisterPage