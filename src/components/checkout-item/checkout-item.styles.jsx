import styled, { css } from 'styled-components';

const CheckoutColumn = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CheckoutRemoveButtonContainer = styled.button`
  margin-left: 12px;
  padding: 0 5px;
  cursor: pointer;
`;

export const CheckoutNameContainer = styled.span`${CheckoutColumn}`;
export const CheckoutPriceContainer = styled.span`${CheckoutColumn}`;

export const QuantityContainer = styled.div`
  ${CheckoutColumn};
  padding-left: 20px;
  display: flex;
`;

export const QuantityArrowContainer = styled.button`
  padding: 0 5px;
  cursor: pointer;
`;

export const QuantityValueContainer = styled.span`
  margin: 0 5px;
`;
