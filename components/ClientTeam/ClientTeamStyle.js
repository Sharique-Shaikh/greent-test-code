import { device } from '@/styles/theme';
import styled from 'styled-components';

export const JoinSubTitle = styled.div`
  color: #222222;
  font-weight: 700;
  text-align: center;
  font-size: 20px;

  @media ${device.laptop} {
    font-size: 24px;
    line-height: 36px;
  }
  @media ${device.tablet} {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const JoinContent = styled.div`
  color: #222222;
  font-weight: 400;
  text-align: center;
  line-height: 20px;
  margin: 4rem 0rem 0rem;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 36px;
    margin: 4rem 10rem;
  }

  @media ${device.laptop} {
    font-size: 18px;
    line-height: 36px;
    margin: 4rem 10rem;
  }
`;

export const JoinButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
