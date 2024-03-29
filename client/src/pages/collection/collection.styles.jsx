import styled from 'styled-components';

export const CollectionPageSections = styled.section`
  display: flex;
  flex-direction: column;
`;

export const CollectionPageTitle = styled.h1`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;
