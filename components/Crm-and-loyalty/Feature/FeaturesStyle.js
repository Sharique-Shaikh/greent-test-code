import { device } from '@/styles/theme';
import styled from 'styled-components';
import Image from 'next/image';

let clr = '#d6eoda';

export const PartnerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  text-align: center;
  gap: 2rem;
  margin-top: 1rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 1.5rem;
    gap: 3rem;
    margin-top: 1.5rem;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 5.5rem;
  }
`;

export const PartnerDetail = styled.div`
  border: 1px solid;
  border-color: ${(props) => props.theme.LightGreen};
  border-radius: 0.9rem;
  padding: 4rem 2rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.77, 0, 0.175, 1);
  text-align: center;

  &:hover {
    border: 2.5px solid;
    border-color: ${(props) => props.theme.MadGreen};
    transition: all 0.2s cubic-bezier(0.77, 0, 0.175, 1);
    color: ${(props) => props.theme.MadGreen};
  }
`;

export const PartnerLogo = styled(Image)`
  height: 5rem;
  width: 5rem;
`;

export const PartnerSubTitle = styled.h4`
  line-height: 2.4rem;
  font-weight: 400;
  margin-top: 0.9rem;
`;

export const LogoWrapper = styled.div`
  object-fit: cover;
  background-color: #f0f5f0;
  padding: 10px 2px;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;
