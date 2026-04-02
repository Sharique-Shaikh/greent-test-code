import styled from 'styled-components';
import { device } from '../../../styles/theme';

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  text-align: center;
  row-gap: 0.3rem;
  padding: 4rem 0;

  img {
    height: 300px;
    width: 500px;
    justify-self: center;
    align-self: end;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 4rem;
    text-align: left;
    height: 90vh;

    img {
      height: 90%;
      width: 700px;
      order: 1;
      align-self: center;
    }
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    padding: 10rem 0;
    height: 95vh;
  }
`;

export const TestContainer = styled.div``;

export const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 3.5rem;
  line-height: 40px;
  margin-bottom: 0.5rem;
  letter-spacing: -1px;
  color: ${(props) => props.theme.MineShaft};

  @media${device.laptop} {
    margin-bottom: 0.85rem;
    font-size: 4.8rem;
    line-height: 62px;
  }
`;

export const HeroDescription = styled.p`
  color: ${(props) => props.theme.MineShaft};
  font-size: 1.5rem;
  line-height: 24px;
  margin: 0.8rem 0;

  @media${device.laptop} {
    line-height: 34px;
    margin: 1rem 0;
    font-size: 2rem;
  }
`;

export const CustomPrevArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 0; /* Adjust the value to position the left arrow */
  transform: translateY(-50%);
  background: transparent;
  cursor: pointer;
  border: 1px solid green;

  img {
    height: 40px !important;
    width: 40px !important;
    transform: rotate(180deg);
  }
`;

export const CustomNextArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 0; /* Adjust the value to position the right arrow */
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  img {
    height: 60px !important;
    width: 60px !important;
  }
`;

export const ConsultButton = styled.button`
  position: relative;
  color: #fff;
  font-weight: 600;
  width: 20rem;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  text-align: center;
  transition: 0.3s;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.MikadoGreen};
  border: 1px solid ${(props) => props.theme.MikadoGreen};
  color: #fff;
  border-radius: 3.2rem;
  box-shadow: 0px 5px 12px 0px #007f6252;
  text-align: left;

  &:hover {
    background: transparent;
    color: ${(props) => props.theme.MikadoGreen};
  }

  @media ${device.mobileM} {
    padding: 1rem 1rem 1rem 5rem;
  }

  @media ${device.tablet} {
    font-size: 1.6rem;
    padding: 1.8rem 2.4rem;
  }

  // @media ${device.laptop} {
  //   padding: 2rem 2rem;
  // }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  top: 1px;
  right: 4px;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 100rem;

  img {
    height: 30px;
    width: 30px;
  }

  @media${device.mobileM} {
    top: 2px;
    right: 1px;
  }

  @media${device.laptop} {
    top: 5px;
    right: 10px;
    width: 4.2rem;
    height: 4.2rem;
    background-color: #fff;

    img {
      height: 42px;
      width: 54px;
    }
  }
`;

export const HeroDisclaimer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.8rem;

  img {
    height: 20px;
    width: 20px;
  }

  @media ${device.mobileM} {
    gap: 1rem;
  }

  @media${device.laptop} {
    margin-top: 1rem;
    width: 80%;
  }
`;

export const DisclaimerTitle = styled.h3`
  color: ${(props) => props.theme.MineShaft};
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 24px;

  @media${device.laptop} {
    font-size: 2rem;
    line-height: 32px;
  }
`;

export const HighlightSymbol = styled.span`
  color: ${(props) => props.theme.MikadoGreen};
  font-weight: 500;
  color: #000;
  font-size: 1.5rem;

  @media${device.laptop} {
    font-size: 2rem;
  }
`;

export const HightLightTitle = styled.span`
  font-size: 1.5rem;
  color: ${(props) => props.theme.MikadoGreen};
  font-weight: 700;

  @media${device.laptop} {
    font-size: 2rem;
  }
`;
