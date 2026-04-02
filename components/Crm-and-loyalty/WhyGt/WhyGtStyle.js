import { device } from '@/styles/theme';
import styled from 'styled-components';

export const GTContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  // img {
  //   height: 400px;
  // }

  @media ${device.mobileM} {
    margin-top: 3rem;
    gap: 3rem;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 6.4rem;
    align-items: center;
  }
`;

export const GTContent = styled.div`
  p {
    font-weight: 400;
    font-size: 2rem;
    line-height: 34px;
    color: #000;
    letter-spacing: -1px;
    // margin-top: 2rem;

    @media${device.mobileM} {
      font-size: 1.4rem;
      line-height: 24px;
    }

    @media${device.laptop} {
      font-size: 2.4rem;
      line-height: 40px;
      margin-top: 0.4rem;
    }
  }
`;

export const GTDesc = styled.div`
  margin-top: 4rem;
`;

export const GTDescTitle = styled.div`
  display: flex;
  margin-top: 1rem;

  @media ${device.mobileM} {
    align-items: center;
  }

  p {
    margin-left: 1rem;
    font-weigh: 400;
    font-size: 1.8rem;
    line-height: 26px;
    color: ${(props) => props.theme.FairGray};

    @media${device.mobileM} {
      font-size: 1.4rem;
      line-height: 28px;
    }

    @media${device.laptop} {
      margin-left: 1.5rem;
      margin-top: 1.5rem;
      font-size: 2.4rem;
      line-height: 31.25px;
    }
  }
`;
