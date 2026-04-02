import styled from 'styled-components';
import { device } from '../../styles/theme';

export const FlowChartWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 10rem 0rem 0rem;

  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10rem 20rem;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4rem 2rem;
  }
`;

export const BtnImageWrap = styled.div`
  width: 200px;
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
  rotate: calc(90deg);
  margin: 12rem 0 5rem;
  @media ${device.laptop} {
    rotate: calc(0deg);
    margin-left: 5rem;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  @media ${device.tablet} {
    rotate: calc(0deg);
    margin-left: 5rem;
    margin-top: 0rem;
    margin-bottom: 0rem;
    margin-right: 5rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 4rem 0 3rem 0;

  @media (min-width: 1100px) and (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
`;

export const Card = styled.div`
  width: 316px;
  height: 316px;
  background-color: ${({ index }) => (index % 2 === 0 ? '#007f62' : 'white')};
  border: 1.5px solid #007f62;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 2px 6px hsla(45, 100%, 15%, 0.15);
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;

  @media ${device.laptopL} {
    width: 420px;
  }

  @media (min-width: 1100px) and (max-width: 1300px) {
    width: 500px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-size: 24px;
  cursor: pointer;
  margin-top: 3rem;
  color: ${({ index }) => (index % 2 === 0 ? 'white' : '#222222')};
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
`;

export const CardSubcontent = styled.p`
  font-size: 15px;
  color: #777777;
  color: ${({ index }) => (index % 2 === 0 ? 'white' : '#222222')};
  line-height: 1.5;
  text-align: left;
  padding: 0 20px;
  max-height: 0;
  margin-top: 5rem;
  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
