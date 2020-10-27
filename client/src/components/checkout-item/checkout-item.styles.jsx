import styled, { css } from 'styled-components';

const CheckoutColumn = css`
  width: 23%;
  @media only screen and (max-width: 800px) {
    width: unset;
  }
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  @media only screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr 75px 50px 75px;
    grid-gap: 5px;
  }
`;

export const CheckoutImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 800px) {
    width: unset;
    max-width: 150px;
    margin-right: 5px;
    padding-right: 0;
  }
`;

export const CheckoutRemoveButtonContainer = styled.button`
  margin-left: 12px;
  padding: 0 5px;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    margin: 0 auto;
  }
`;

export const CheckoutNameContainer = styled.span`${CheckoutColumn}`;
export const CheckoutPriceContainer = styled.span`${CheckoutColumn}`;

export const QuantityContainer = styled.div`
  ${CheckoutColumn};
  padding-left: 20px;
  display: flex;
  @media only screen and (max-width: 800px) {
    padding-left: 0;
  }
`;

export const QuantityArrowContainer = styled.button`
  padding: 0 5px;
  cursor: pointer;
`;

export const QuantityValueContainer = styled.span`
  margin: 0 5px;
`;
