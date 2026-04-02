import { Carousel } from 'react-responsive-carousel';
import { device } from '../../styles/theme';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Section = styled.div`
  padding: 3rem  2rem;

  // prev top : 4rem;
  @media ${device.laptopS} {
    padding: 6rem  3.2rem;
  }
`;

export const SectionTitle = styled.h2`
  color: ${(props) => props.theme.MineShaft};
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: -1px;
  line-height: 1.5;

  @media ${device.mobileM} {
    font-size: 1.8rem;
  }

  @media ${device.tablet} {
    margin-bottom: 1.5rem;
    font-size: 2.8rem;
  }

  @media ${device.laptop} {
    margin-bottom: 1.2rem;
    font-size: 3.8rem;
    font-weight: 700;
  }
`;

export const SectionDescription = styled.p`
  color: ${(props) => props.theme.FairGray};
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.4;

  @media ${device.mobileM} {
    /* line-height: 24px; */
  }

  @media ${device.tablet} {
    /* margin-bottom: 1.5rem; */
    font-size: 1.6rem;
    /* line-height: 2.8rem; */
  }

  @media ${device.laptopS} {
    // margin-bottom: 6.4rem;
    /* margin-bottom: 3rem; */
    font-size: 1.8rem;
    /* line-height: 3.2rem; */
  }

  @media ${device.laptop} {
    margin-bottom: 3rem;
    font-size: 1.8rem;
    /* line-height: 3.2rem; */
  }
`;

export const SectionDescriptionPartner = styled.p`
  color: ${(props) => props.theme.FairGray};
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 1.4rem;

  @media ${device.mobileM} {
    line-height: 24px;
  }

  @media ${device.tablet} {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    line-height: 2.8rem;
  }

  @media ${device.laptopS} {
    // margin-bottom: 6.4rem;
    margin-bottom: 3rem;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  @media ${device.laptop} {
    margin-bottom: 1.4rem;

    font-size: 2.3rem;
    line-height: 3.2rem;
  }
`;

export const Container = styled.div`
  margin: 0 2.8rem 0 2.8rem;

  @media ${device.tablet} {
    // max-width: 968px;
    margin: 0 auto;
  }

  @media ${device.laptop} {
    padding: 0 3%;
  }
`;

export const GlobalWrapper = styled.div`
  background-color: #f0f5f0;
  background-image: url('/assets/images/HeroBg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StyledButton = styled.button`
  color: #fff;
  font-weight: 600;

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

  &:hover {
    background: transparent;
    color: ${(props) => props.theme.MikadoGreen};
  }

  @media ${device.tablet} {
    font-size: 1.6rem;
    padding: 1.3rem 2.4rem;
  }
`;

export const CtaBtn = styled(StyledButton)`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.MikadoGreen};
  color: ${(props) => props.theme.TextColor};

  &:hover {
    color: #fff;
  }
`;

export const Title = styled.h1`
  line-height: 1.5;
  font-weight: 700;
  margin-bottom: 0.85rem;
  color: ${(props) => props.theme.MikadoGreen};
  text-align: center;
  font-size: 6rem;
`;

export const CustomCarousel = styled(Carousel)`
  width: 100%;
  max-width: 100%;
  height: auto;

  .carousel.carousel-slider {
    padding-bottom: 11rem;
  }

  .control-dots {
    display: flex;
    justify-content: center;
  }

  .carousel .control-dots .dot {
    background-color: ${(props) => (props.bgColor ? props.bgColor : '#000')};
  }

  .carousel .control-dots .dot.selected {
    width: 32px;
    height: 8px;
    border-radius: 24px;
    background-color: ${(props) =>
      props.bgColor ? props.bgColor : props.theme.MineShaft};
  }
`;

export const Line = styled.div`
  line-height: 1.5;
`;

export const SectionSubTitle = styled.div`
  color: #222222;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: -1px;

  @media ${device.mobileM} {
    font-size: 1rem;
  }

  @media ${device.tablet} {
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  @media ${device.laptop} {
    margin-bottom: 1.2rem;
    font-size: 24px;
    font-weight: 400;
  }
`;

export const Navigator = styled.div`
  padding: 0 1rem;
  cursor: pointer;

  img {
    height: 50px;
    width: 50px;
  }
`;
