import { device } from '@/styles/theme';
import styled from 'styled-components';

export const WhyGreenternCont = styled.div`
  color: #222222;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;

  @media ${device.laptop} {
    font-size: 20px;
    line-height: 36px;
    margin: 0rem 10rem;
  }
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 34px;
  }
`;
