import { device } from '@/styles/theme';
import styled from 'styled-components';
import Image from 'next/image';

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
    gap: 4rem;
    margin-top: 5.5rem;
    padding-bottom: 7rem;
  }
`;

export const PartnerDetail = styled.div``;

export const PartnerLogo = styled(Image)`
  height: 5rem;
  width: 5rem;
`;

export const PartnerSubTitle = styled.h4`
  line-height: 2.4rem;
  font-weight: 400;
  margin-top: 0.9rem;
`;
