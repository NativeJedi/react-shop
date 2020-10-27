import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 100%;
  max-width: 380px;
  @media only screen and (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

export const SignInTitle = styled.h2`
  margin: 20px 0;
`;

export const SignInButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
