import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  
  @media only screen and (max-width: 800px) {
    right: 20px;
  }
  button {
    margin-top: auto;
  }
`;

export const DropdownItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const EmptyMessageContainer = styled.span`
  margin: 50px auto;
  font-size: 18px;
`;
