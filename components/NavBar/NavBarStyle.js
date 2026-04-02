import { device } from '@/styles/theme';
import Link from 'next/link';
import styled from 'styled-components';

export const NavBarContainer = styled.div``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  column-gap: 3rem;
  transition: 0.5s;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    row-gap: 5rem;
    padding: 5rem;
    background-color: ${(props) => props.theme.ContainerColor};
    position: fixed;
    width: 350px;
    min-height: 100vh;
    top: 55px;
    box-shadow: 0 2px 6px hsla(45, 100%, 15%, 0.15);
    right: ${(props) => (props.sideMenu ? '0' : '-600%')};
  }
`;

export const NavItem = styled.li`
  padding: 5px 6px;
  position: relative;
`;

export const NavLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: 500;
  transition: 0.4s;
  text-decoration: none;
  color: #000;

  @media ${device.tablet} {
    color: #fff;
  }

  &:hover {
    color: #fff;
  }
`;

export const ContactLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: 700;
  transition: 0.4s;
  text-decoration: none;
  color: ${(props) => props.theme.MadGreenish};
  border: 1px solid #222;
  height: 4rem;
  width: 4rem;
  border-radius: 3.2rem;
  padding: 1rem 3rem;

  @media ${device.laptop} {
    display: none;
  }
`;

export const NavIcon = styled.div`
  svg {
    font-size: 2.2rem;
    cursor: pointer;
    fill: ${(props) => props.theme.TitleColor};
  }
`;

export const ActiveIndicator = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 999;
  border: 2px solid #fff;
`;
