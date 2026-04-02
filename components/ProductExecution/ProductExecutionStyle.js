import { device } from '@/styles/theme';
import styled from 'styled-components';

export const ProductExecutionWrapper = styled.div`
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

export const FlowChartWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 2rem 1rem;
  justify-items: center;
  align-items: center;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 4fr 1fr 3fr 1fr 2fr;
    gap: 2rem;
    margin: 10rem 20rem;
  }
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 4fr 1fr 3fr 1fr 2fr;
    gap: 2rem;
    margin: 4rem 2rem;
  }
`;

export const BtnImageWrap = styled.div`
  // width: 200px;
  height: auto;
  @media ${device.laptop} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const ArrowImgWrap = styled.div`
  width: 100%;
  transform: rotate(90deg);
  margin: 12rem 0 5rem;
  @media ${device.laptop} {
    transform: rotate(0deg);
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  @media ${device.tablet} {
    transform: rotate(0deg);
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
`;
