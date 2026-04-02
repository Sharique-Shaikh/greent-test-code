import styled from 'styled-components';
import { device } from '../../styles/theme';

export const AboutUsWrapper = styled.div`
  margin-top: 8rem;
`;

export const AboutUsGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1 fr;
  margin-top: 5rem;
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: auto;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media ${device.laptopL} {
    img {
      width: 95%;
    }
  }
`;

export const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentHead = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: #222222;
  @media ${device.laptop} {
    font-size: 36px;
    line-height: 50px;
  }
  @media ${device.tablet} {
    font-size: 36px;
    line-height: 50px;
  }
`;

export const SubContent = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  color: #222222;
  padding-top: 2rem;
  @media ${device.laptop} {
    font-size: 20px;
    padding-top: 4rem;
    line-height: 32px;
  }
  @media ${device.tablet} {
    font-size: 18px;
    padding-top: 4rem;
  }
`;
