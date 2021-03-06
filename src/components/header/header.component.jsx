import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assests/crown.svg'; 
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';

const Header =({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className="options">
            <Link className='options' to='/shop'>SHOP</Link>
            <Link className='options' to='https://murmuring-mesa-21077.herokuapp.com/contact'>CONTACT</Link>
            {
                currentUser ?(
                <div className='options' onClick={()=>auth.signOut()}>SIGN OUT</div>
                ):(
                <Link className='options' to='/sign'>SIGN IN</Link>)
            }
        </div>
    </div>
);

export default Header;