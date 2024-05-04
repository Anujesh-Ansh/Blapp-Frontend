import React, { useContext,useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBlog} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Header = () => {
  const {setUserInfo,userInfo} = useContext(UserContext)
  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo)
        
      })
    })
  },[])

  function logout(){
    fetch('http://localhost:4000/logout',{
      credentials: 'include',
      method: 'POST'
    })

    setUserInfo(null)
    
  }

  const username = userInfo?.username;

  return (
    <header>
        <Link to="/" className="logo">Blapp</Link>
        <nav>
          {username && (
            <>
              <Link className='link' to="/create">Create new Post</Link>
              <a className='userName'onClick={logout}>{username}</a>
            </>
          )}
          {!username && (
            <>
              <Link className='link' to="/login">Login</Link>
              <Link className='link' to="/register">Register</Link>
            </>
          )}
            
            <Link className='link' to="/qrCode">
                <FontAwesomeIcon icon={faBlog} style={{ color: '#f5bc03' }} />
            </Link>

        </nav>
      </header>
  )
}

export default Header