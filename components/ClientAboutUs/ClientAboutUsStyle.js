import styled, { keyframes } from 'styled-components';
import { device } from '../../styles/theme';
import Image from 'next/image';

export const BrandWrapper = styled.div`
  max-width: 100vw;
  margin-top: 0.3rem;
  padding-bottom: 50px;
`;

// Define keyframes for infinite horizontal scrolling
const scrollAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
`;

// Container for the brand images
export const BrandContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;

  flex: none;

  font-size: 1px;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
`;

export const BrandImageWrapper = styled.div`
  height: 40px;
  margin-top: 4rem;
  justify-content: center;
  align-items: center;
  display: flex;
  // animation: ${scrollAnimation} 10s infinite; /* Adjust the duration as needed */

  @media ${device.laptop} {
    width: 200px;
    height: 40px;
    margin-top: 6rem;
  }

  @media ${device.laptopL} {
    width: 300px;
  }
`;

// Styled component for individual brand images
export const BrandImage = styled(Image)`
  width: 165px;
  height: 45px;
  @media ${device.laptop} {
    width: 170px;
    height: 50px;
  }
`;
