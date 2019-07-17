import React from 'react'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './index.scss';
import {auth} from '../../firebase/firebase.utils';
import {connect} from  'react-redux';

function Header({currentUser}) {
    return (
        <div className='header'>
            <Link className="logo-conatiner" to="/">
                <Logo className='logo'/>
            </Link>
            <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            { currentUser ?
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className="option" to="/sign">
                SIGN IN
            </Link>
            }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps,null)(Header);
