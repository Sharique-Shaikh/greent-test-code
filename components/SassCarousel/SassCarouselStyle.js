import { device } from '@/styles/theme';
import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  margin: 3rem 0 0;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */

  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }

  @media ${device.tablet} {
    margin: 3rem;
  }

  @media ${device.laptop} {
    margin: 3rem;
  }

  @media ${device.laptopL} {
    justify-content: space-evenly;
  }
`;

export const CarouselCard = styled.div`
  background-color: #fff;
  background-image: url(${({ backgroundImage }) => backgroundImage || 'none'});
  position: relative;
  border-radius: 24px;
  box-shadow: 0 2px 6px hsla(45, 100%, 15%, 0.15);
  padding: 20px;
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  overflow: hidden; /* Ensures the pseudo-element respects the border-radius */

  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    // background-color: hsla(0, 0%, 0%, 0.5); /* Semi-transparent overlay */
    z-index: 2; /* Ensure the overlay is on top of the background image */
    pointer-events: none; /* Ensure the overlay doesn't interfere with interactions */
  }

  @media ${device.tablet} {
    width: 312px;
    height: 312px;
  }

  @media ${device.laptop} {
    width: 312px;
    height: 312px;
  }

  @media ${device.laptopL} {
    width: 400px;
  }
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  padding-top: 1rem;

  color: ${({ hasBackground }) => (hasBackground ? '#ffffff' : '#555')};

  @media ${device.tablet} {
    font-size: 24px;
    padding-top: 3rem;
  }
  @media ${device.laptop} {
    font-size: 24px;
    padding-top: 3rem;
  }
`;

export const CardContent = styled.p`
  font-size: 16px;
  margin-top: 2rem;
  color: ${({ hasBackground }) => (hasBackground ? '#ffffff' : '#555')};

  @media ${device.laptop} {
    font-size: 20px;
    margin-top: 6rem;
  }
  @media ${device.tablet} {
    font-size: 20px;
    margin-top: 6rem;
  }
`;

export const CarouselTitle = styled.div`
  color: #777777;
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
  margin: 5rem 0;

  @media ${device.laptop} {
    margin: 5rem 3rem 0;
  }
  @media ${device.tablet} {
    margin: 5rem 3rem 0;
  }
`;
