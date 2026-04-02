import styled from 'styled-components';
import { device } from '../../styles/theme';

export const WrapperDiv = styled.div`
  background-color: #000;
  background-color: #000;
  background-image: url('https://web-assets.ifttt.com/packs/media/prosumer/home-hero-a2644b8d67b6842e1bbf.svg');
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 124%;
  background-position: center top;
  padding: 4rem 0;
`;

export const HeroContainer = styled.div`
  display: grid;
  // grid-template-columns: repeat(1, 1fr);
  text-align: center;
  row-gap: 1rem;
  column-gap: 1rem;
  height: 50vh;

  img {
    height: 500px;
    width: 500px;
    justify-self: center;
    align-self: end;
    border-radius: 50%;
  }

  @media ${device.tablet} {
    // grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 1rem;
    text-align: center;

    img {
      height: 700px;
      width: 700px;
      order: 1;
      align-self: center;
    }
  }
`;

export const HeroTitle = styled.h6`
  font-size: 6.4rem;
  line-height: 1.5;
  font-weight: 700;
  margin-bottom: 0.85rem;
  // color: ${(props) => props.theme.MikadoGreen};
  color: #fff;
  font-weight: bold;
`;

export const HeroDescription = styled.p`
  font-size: 2.5rem;
  line-height: 1.8;
  margin-bottom: 1rem;
  // color: ${(props) => props.theme.TextColor};
  margin-top: 2rem;
  color: #fff;
  font-weight: bold;
`;

export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.MikadoGreen};
  color: #fff;
  font-weight: 600;
  border-radius: 5rem;
  font-size: 5rem;
  padding: 2rem 2rem;
  text-align: center;
  transition: 0.3s;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.MikadoGreen};
  }

  @media ${device.tablet} {
    // font-size: 1.6rem;
    // padding: 1.3rem 2.4rem;

    margin-top: 3rem;

    font-size: 3.3rem;
    padding: 3rem 5.5rem;
  }
`;
