import styled from 'styled-components';
import { CustomButtonContainer } from '../custom-button/custom-button.styles';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
  &:hover {
    img {
      opacity: 0.8;
      @media only screen and (max-width: 800px) {
        opacity: unset;
      }
    }

    button {
      opacity: 0.85;
      display: flex;
      @media only screen and (max-width: 800px) {
        opacity: unset;
      }
    }
  }
`;

export const CollectionImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: url("${({ imageUrl }) => imageUrl}");
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 0 5px;
`;

export const CollectionCustomButton = styled(CustomButtonContainer)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  @media only screen and (max-width: 800px) {
    width: 90%;
    padding: 0 20px;
  }
`;
