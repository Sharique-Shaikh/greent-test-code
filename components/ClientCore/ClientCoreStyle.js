import styled from 'styled-components';

export const CoreWrapper = styled.div`
  background-color: #e9e9fc;
  border-radius: 24px;
  position: relative;
  width: 100%;
  height: auto;
  z-index: 1;
  padding: 5rem 2rem;
`;

export const TopImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  z-index: -1;
`;

export const BottomImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`;
