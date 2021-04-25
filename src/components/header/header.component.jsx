import React from 'react';
import {connect} from 'react-redux';

import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from './../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from './../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown-component.cart';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo'/>
        </Link>    
        <div className='options'>
            <Link className= 'option' to='/shop'>
                SHOP
            </Link>
            <Link className= 'option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signIn'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        <div>{
            hidden ? null : <CartDropDown/>
        }
        </div>
        
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);