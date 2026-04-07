import { device } from '@/styles/theme';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

export const TrustByWrapper = styled.div`
  // background-color: #f0f5f0;
`;

export const BrandWrapper = styled.div`
  max-width: 100vw;
  margin-top: 0.3rem;
  // padding-bottom: 50px;
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
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  flex: none;
  font-size: 1px;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  @media ${device.laptopM} {
    grid-column-gap: 1rem;
  }

  @media ${device.laptopL} {
    grid-column-gap: 1rem;
  }
`;

export const BrandImageWrapper = styled.div`
  height: 40px;
  margin-top: 4rem;
  justify-content: center;
  align-items: center;
  display: flex;
  // animation: ${scrollAnimation} 10s infinite; /* Adjust the duration as needed */

  @media${device.laptop} {
    width: 200px;
    height: 40px;
    margin-bottom: 4rem;
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 195px;
  }

  @media (min-width: 1200px) and (max-width: 1300px) {
    width: 160px;
  }
`;

// Styled component for individual brand images
export const BrandImage = styled(Image)`
  width: 165px;
  height: 45px;
  object-fit: contain ;

  @media${device.laptop} {
    width: 170px;
    height: 50px;
  }
`;

export const BrandDescription = styled.p`
  font-weight: 400;
  font-size: 2rem;
  color: ${(props) => props.theme.FairGray};
  text-align: center;
`;

export const HighLightBrand = styled.span`
  font-weight: 700;
  font-size: 2rem;
  color: ${(props) => props.theme.FairGray};
`;