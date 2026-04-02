import { device } from '@/styles/theme';
import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  margin-top: 5rem;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */

  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }
`;

export const CarouselCard = styled.div`
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 2px 6px hsla(45, 100%, 15%, 0.15);
  padding: 20px;
  flex-shrink: 0;
  width: 250px;
  height: 320px;

  @media ${device.tablet} {
    width: 499px;
    height: 347px;
  }

  @media ${device.laptopS} {
    width: 300px;
    height: 500px;
  }

  @media ${device.laptop} {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 1185px) {
    width: 300px;
    height: 500px;
  }

  @media ${device.laptopL} {
    justify-content: space-between;

    width: 400px;
    height: 400px;
  }
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  padding-top: 1rem;
  color: #222222;
  @media ${device.laptop} {
    font-size: 24px;
    padding-top: 3rem;
  }
  @media ${device.tablet} {
    font-size: 24px;
    padding-top: 3rem;
  }
`;

export const CardContent = styled.p`
  color: #777777;
  font-size: 16px;
  margin-top: 1rem;
  @media ${device.laptop} {
    font-size: 20px;
    margin-top: 3rem;
  }
  @media ${device.tablet} {
    font-size: 20px;
    margin-top: 3rem;
  }
`;
