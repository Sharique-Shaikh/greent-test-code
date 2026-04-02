import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { device } from '../../styles/theme';

export const Wrapper = styled.div`
  background-image: url('/assets/images/FooterBg.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FooterImgContainer = styled.div`
  padding-top: 55px;
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  padding: 3rem 0;

  @media ${device.laptopS} {
    display: flex;
    justify-content: space-between;
    padding: 2.5rem 0;
  }
`;

export const CopyRightContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5rem 0;
`;

export const FooterContentHeader = styled.h3`
  font-size: 1.8rem;
  line-height: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.MineShaft};
`;

export const FooterContentSubHeader = styled.h3`
  font-size: 1.8rem;
  line-height: 24px;
  font-weight: 700;
  margin-top: 1rem;
  color: ${(props) => props.theme.MineShaft};
`;

export const FooterContact = styled.div`
  margin-top: 3rem;
`;

export const FooterTextContent = styled.div`
  margin-top: 1rem;
`;

export const FooterDiv = styled.div`
  @media ${device.laptopS} {
    width: 35%;
  }
`;

export const FooterImage = styled(Image)``;

export const FooterContent = styled.div``;

export const FooterTitle = styled.h3`
  font-weight: 500;
  margin-top: 1.3rem;
  margin-bottom: 1rem;
  line-height: 3.1rem;
  font-size: 1.8rem;
  color: ${(props) => props.theme.MineShaft};
`;

export const FooterLinks = styled.ul`
  display: grid;
  row-gap: 1.8rem;
  margin-top: 2rem;
`;

export const FooterLink = styled.li``;

export const FooterNavLink = styled(Link)`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.MineShaft};
`;

export const FooterNavLinkTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.MineShaft};
`;

export const FooterLogoLink = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: 2rem;
`;

export const FooterDivider = styled.div`
  width: 100%;
  border: 1px solid #000;
  border-left: none;
  border-right: none;

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const FooterLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3rem;
  margin: 3rem 0;
`;

export const FooterIcon = styled.div`
  font-size: 2rem;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: ${(props) => props.theme.MikadoGreen};
  }
`;

export const CopyrightText = styled.div`
  font-size: 1.6rem;
  color: ${(props) => props.theme.MineShaft};
  font-weight: 400;
  line-height: 24px;
  padding: 2.2rem 0;
  display: flex;
  justify-content: center;
`;

export const FooterText = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 3.1rem;
  color: ${(props) => props.theme.MineShaft};
`;

export const FooterSpanDot = styled.div`
  width: 4px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
`;
