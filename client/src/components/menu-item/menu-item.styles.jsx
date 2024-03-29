import styled, { css } from 'styled-components';

const sizes = {
  large: css`height: 380px;`,
  default: css`height: 240px;`,
};

export const MenuItemTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const MenuItemSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

export const MenuItemBackground = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("${({ imageUrl }) => imageUrl}");
`;

export const MenuItemContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  text-transform: uppercase;
  cursor: pointer;
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  ${({ size }) => sizes[size] || sizes.default};

  &:first-child {
    margin-right: 7.5px;
    @media only screen and (max-width: 440px) {
      margin-right: auto;
    }
  }

  &:last-child {
    margin-left: 7.5px;
    @media only screen and (max-width: 440px) {
      margin-left: auto;
    }
  }
  
  @media only screen and (max-width: 800px) {
    height: 200px;
  }
  @media only screen and (max-width: 440px) {
    max-width: 300px;
    min-width: auto;
    width: 100%;
    margin: 0 auto 20px auto;
  }
  
  &:hover {
    ${MenuItemBackground} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  
    ${MenuItemContent} {
      opacity: 0.9;
    }
  }
`;
