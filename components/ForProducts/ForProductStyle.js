import styled from 'styled-components';
import { device } from '../../styles/theme';

export const ForProductGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1 fr;
  margin-top: 5rem;
  padding: 4rem 0;

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: auto;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ProductWrapper = styled.div`
  background-color: #f0f5f0;
  background-image: url('/assets/images/HeroBg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ContentTitle = styled.div`
  font-size: 26px;
  color: #222222;
  font-weight: 700;
  @media ${device.laptop} {
    font-size: 42px;
    line-height: 52px;
  }
`;

export const ContentSubTitle = styled.div`
  font-size: 15px;
  color: #222222;
  font-weight: 400;
  margin-top: 5rem;
  @media ${device.laptop} {
    font-size: 20px;
    line-height: 32px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  text-align: left;
  @media ${device.laptop} {
    width: 350px;
    margin-top: 3rem;
  }
  @media ${device.tablet} {
    width: 300px;
    margin-top: 3rem;
  }
`;

export const ContentSubGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1 fr;
  margin-top: 3rem;

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    gap: 22rem;
    margin-top: 5rem;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
    margin-top: 3rem;
  }
`;

export const SubGridCont = styled.div`
  color: #222222;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 3rem;
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
`;

export const SubGridHighlightCont = styled.div`
  color: #222222;
  font-weight: 700;
  font-size: 20px;

  @media ${device.laptop} {
    font-size: 24px;
    line-height: 42px;
  }
  @media ${device.tablet} {
    font-size: 22px;
    line-height: 30px;
  }
`;

export const HrLine = styled.div`
  width: 100%;
  border: 1px solid black;
  opacity: 0.2;
  margin-top: 3rem;
`;
