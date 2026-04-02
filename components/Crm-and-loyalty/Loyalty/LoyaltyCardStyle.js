import { device } from '@/styles/theme';
import styled from 'styled-components';

export const LoyaltyCardContainer = styled.div`
  width: 30rem;
  height: 40.2rem;
  border-radius: 2.4rem;
  background-color: #fff;
  padding: 4rem 2rem 6rem 2rem;
  text-align: left;

  @media ${device.laptop} {
    width: 34rem;
  }

  @media ${device.laptopL} {
    width: 48rem;
    padding: 4rem 2rem 2rem 2rem;
    height: 35rem;
  }

  @media (min-width: 1100px) and (max-width: 1300px) {
    width: 30rem;
  }
`;

export const LpcIcon = styled.div`
  margin-bottom: 2rem;

  img {
    height: 70px !important;
    width: 70px !important;
  }
`;

export const LpcTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.MineShaft};

  @media ${device.laptop} {
    font-size: 2.4rem;
  }
`;

export const LpcDescription = styled.div`
  margin-top: 1.5rem;

  p {
    font-size: 1.8rem;
    font-weight: 400;
    color: ${(props) => props.theme.FairGray};
    line-height: 30px;
  }

  @media ${device.laptop} {
    margin-top: 3rem;
  }
`;
