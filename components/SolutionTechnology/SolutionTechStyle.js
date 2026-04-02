import styled from 'styled-components';

export const TechnologyWrapper = styled.div`
  background-color: #d9efde;
  border-radius: 24px;
  padding: 4rem 0rem;
  position: relative;
  z-index: 1;
`;

export const TopImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

export const BottomImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;
