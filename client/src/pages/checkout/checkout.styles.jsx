import styled from 'styled-components';

export const CheckoutPageSection = styled.section`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const CheckoutHeader = styled.header`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media only screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 75px 50px 75px;
    grid-gap: 5px;
  }
`;

export const CheckoutHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
  
  @media only screen and (max-width: 800px) {
    width: unset;
    &:last-child {
      width: unset;
      text-align: center;
    }
  }
`;

export const CheckoutTotalContainer = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  @media only screen and (max-width: 800px) {
    margin-right: 20px;
  }
`;
