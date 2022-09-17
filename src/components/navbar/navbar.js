

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoginButton } from '../authButton/loginButton.js';
import {LogoutButton} from '../authButton/logoutButton.js'
import './navbar.css';
import {auth} from '../../server/firebase'

import { useAuthState } from "react-firebase-hooks/auth";



function Navbar() {
  // const [click, setClick] = useState(false);
  // const [isAuth, setAuth] = useState(false); 
  const [user, loading, error] = useAuthState(auth)

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  
    useEffect(() => {
      if (loading) return (<p>loading</p>)
      
    });
  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            VirtuMed
          </Link>
          {loading? (<p>checking auth</p>): 
          (<> 
          {!user && <LoginButton buttonStyle='btn--outline'>Login</LoginButton>}
          {user && <LogoutButton buttonStyle='btn--outline'>Logout</LogoutButton>}
          </>)}
        </div>
      </nav>
    </>
  );
}

export default Navbar;