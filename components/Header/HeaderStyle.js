import Link from 'next/link';
import styled from 'styled-components';
import { device } from '@/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5s;
  background-color: ${(props) => props.theme.MadGreenish};
  backdrop-filter: blur(3px);
  z-index: 999;
`;

export const HeaderContainer = styled.div`
  height: calc(2.8rem + 2.4rem);
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: none;
  }

  @media ${device.tablet} {
    height: calc(4.8rem + 2.4rem);
    button {
      display: block;
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hamburger = styled.div`
  font-size: 2rem;
  cursor: pointer;

  @media ${device.tablet} {
    display: none;
  }
`;

export const HeaderTitle = styled(Link)`
  color: ${(props) => props.theme.TitleColor};
  font-weight: 600;
  font-size: 1.6rem;

  @media${device.mobileM} {
    img {
      width: 120px;
    }
  }

  @media${device.laptop} {
    img {
      width: 100%;
    }
  }
`;

export const ContactLink = styled(Link)`
  display: none;

  @media ${device.laptop} {
    font-size: 1.6rem;
    font-weight: 700;
    transition: 0.4s;
    text-decoration: none;
    color: ${(props) => props.theme.MadGreenish};
    background-color: #fff;
    height: 4rem;
    display: block;
    // width: 4rem;
    border-radius: 3.2rem;
    padding: 1rem 3rem;
  }
`;
