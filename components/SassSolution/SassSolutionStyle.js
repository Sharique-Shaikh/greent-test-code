import { device } from '@/styles/theme';
import styled from 'styled-components';

export const SassWrapper = styled.div`
  background-color: #e9e9fc;
  border-radius: 24px !important;
  position: relative;
  padding: 1rem;
  z-index: 1;
  overflow: hidden;
  @media ${device.laptop} {
    padding: 5rem;
  }
  @media ${device.tablet} {
    padding: 1rem;
  }
`;
export const TopImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
export const BottomImageContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  z-index: -1;
  @media ${device.laptop} {
    top: 80px;
  }
  @media ${device.tablet} {
    top: 60px;
  }
`;
