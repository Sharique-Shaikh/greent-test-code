import { device } from '@/styles/theme';
import { styled } from 'styled-components';

export const BusinessSolutionWrapper = styled.div`
  // background-color: ${(props) => props.theme.ViolentViolet};
  background-image: url('/assets/images/LocateBg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 4.4rem 0;
`;

export const BusinessSectionTitle = styled.h2`
  color: ${(props) => props.theme.Alabaster};
  text-align: center;
  margin-bottom: 1rem;

  @media ${device.tablet} {
    margin-bottom: 1.5rem;
    font-size: 4rem;
  }

  @media ${device.laptop} {
    margin-bottom: 1.5rem;
    font-size: 5.4rem;
    font-weight: 700;
    line-height: 7rem;
  }
`;

export const BusinessSectionDescription = styled.p`
  color: ${(props) => props.theme.Alabaster};
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 400;

  @media ${device.tablet} {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    line-height: 2.8rem;
  }

  @media ${device.laptop} {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    line-height: 2.6rem;
  }
`;

export const BusinessBtn = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LocateContainer = styled.div`
  margin-top: 4rem;
`;

export const LocationCarouselWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
`;

export const Navigator = styled.div`
  padding: 0 1rem;
  cursor: pointer;

  img {
    height: 50px;
    width: 50px;
    filter: invert(100%) brightness(100%);
  }
`;
