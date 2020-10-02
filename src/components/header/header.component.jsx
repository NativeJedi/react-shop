import React from 'react';
import PropTypes from 'prop-types';
import './header.styles.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { UserPropType } from '../../types/user.type';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.components';

const Header = ({ currentUser, isCartOpened }) => (
  <header className="header">
    <Link className="header__logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <nav className="header-options">
      <Link className="header-options__option" to="/shop">Shop</Link>
      {
        currentUser
          ? (
            <button
              className="header-options__option btn-default"
              onClick={() => auth.signOut()}
            >
              Sign out
            </button>
          )
          : (
            <Link
              to="/entrance"
              className="header-options__option"
            >
              Sign in
            </Link>
          )
      }
      <CartIcon />
    </nav>
    { isCartOpened ? <CartDropdown /> : null }
  </header>
);

Header.propTypes = {
  currentUser: UserPropType,
  isCartOpened: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  currentUser: null,
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  isCartOpened: state.cart.isCartOpened,
});

export default connect(mapStateToProps)(Header);
