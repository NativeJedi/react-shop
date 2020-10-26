import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import { selectCartIsOpened } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.components';
import {
  HeaderContainer,
  HeaderLinkContainer,
  HeaderNavigationContainer,
  LogoContainer,
} from './header.styles';

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpened = useSelector(selectCartIsOpened);

  const signOut = useCallback(
    () => dispatch(signOutStart()),
    [dispatch],
  );

  return (
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
                onClick={signOut}
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
};

export default Header;
