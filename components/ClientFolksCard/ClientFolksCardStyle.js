import { device } from '@/styles/theme';
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 1rem;
  margin-top: 2rem;

  .img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .leaders__img {
    border-radius: 16px;
  }

  @media ${device.laptop} {
    width: 350px;
    height: 560px;
  }

  @media ${device.tablet} {
    width: 350px;
    height: 560px;
  }
`;

export const Details = styled.div`
  flex-grow: 1;
  padding: 13px;

  @media ${device.laptop} {
    padding: 10px 16px;
  }

  @media ${device.tablet} {
    padding: 16px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #222222;

  @media ${device.laptop} {
    font-size: 24px;
  }

  @media ${device.tablet} {
    font-size: 22px;
  }
`;

export const Designation = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #222222;
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #777777;
`;

export const BottomContainer = styled.div`
  margin-top: auto;
  padding: 12px 16px;

  @media ${device.laptop} {
    padding: 8px 16px;
  }

  @media ${device.tablet} {
    padding: 8px 16px;
  }
`;

export const SocialMediaIconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.laptop} {
    padding-top: 3rem;
  }

  @media ${device.tablet} {
    padding-top: 3rem;
  }

  img {
    cursor: pointer;
  }
`;

export const CountryWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const CountryName = styled.div`
  color: #777777;
  font-size: 18px;
  font-weight: 400;
  margin-left: 10px;
`;
