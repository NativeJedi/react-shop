import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 10px 0;
  @media only screen and (max-width: 800px) {
    margin-bottom: 0;
  }
`;

export const LogoContainer = styled(Link)`
  width: 70px;
`;

export const HeaderNavigationContainer = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;

export const HeaderLinkContainer = styled(Link)`
  padding: 10px 15px;
  text-transform: uppercase;
`;
