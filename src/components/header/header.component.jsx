import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { selectCartIsOpened } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { UserPropType } from '../../types/user.type';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.components';
import {
  HeaderContainer,
  HeaderLinkContainer,
  HeaderNavigationContainer,
  LogoContainer,
} from './header.styles';

const Header = ({ currentUser, isCartOpened }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <HeaderNavigationContainer>
      <HeaderLinkContainer to="/shop">Shop</HeaderLinkContainer>
      {
        currentUser
          ? (
            <HeaderLinkContainer
              as="button"
              className="btn-default"
              onClick={() => auth.signOut()}
            >
              Sign out
            </HeaderLinkContainer>
          )
          : (
            <HeaderLinkContainer to="/entrance">
              Sign in
            </HeaderLinkContainer>
          )
      }
      <CartIcon />
    </HeaderNavigationContainer>

    { isCartOpened ? <CartDropdown /> : null }
  </HeaderContainer>
);

Header.propTypes = {
  currentUser: UserPropType,
  isCartOpened: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  currentUser: null,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartOpened: selectCartIsOpened,
});

export default connect(mapStateToProps)(Header);
