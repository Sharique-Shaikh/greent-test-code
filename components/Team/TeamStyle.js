import { device } from '@/styles/theme';
import Image from 'next/image';
import styled from 'styled-components';

export const TeamWrapper = styled.div`
  background-color: #dde9fb;
  background-image: url('/assets/images/TeamBg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 4rem 2rem;
  height: auto;
  border-radius: 2.4rem;
  margin-top: 2rem;

  @media ${device.tablet} {
    padding: 4rem 10rem;
  }

  @media ${device.laptop} {
    // padding: 8rem 10rem;
    padding: 8rem 10rem 5rem 10rem;
  }
`;

export const ChefsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
  }

  @media ${device.laptopS} {
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }
`;

export const TeamData = styled.div`
  padding: 1.8rem;
`;

export const TeamImage = styled(Image)`
  height: 50%;
  width: 100%;

  @media ${device.laptop} {
    width: 100%;
    height: 50%;
  }
`;

export const TeamTitle = styled.h2`
  color: ${(props) => props.theme.MikadoGreen};
  font-weight: 400;
  text-align: left;
  margin: 1.5rem 0;
`;

export const TeamSubTitle = styled.p`
  font-weight: 300;
  text-align: left;
  margin: 1.5rem 0 3rem 0;
`;
