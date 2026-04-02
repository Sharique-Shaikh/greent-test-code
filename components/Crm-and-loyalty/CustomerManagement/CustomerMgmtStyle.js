import { device } from '@/styles/theme';
import { styled } from 'styled-components';

export const CustomerWrapper = styled.div`
  background-color: #ece2f2;
  background-image: url(/assets/images/CEM2.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // min-height: 600px;
  // height: 700px;
  width: 100%;
  border-radius: 2rem;
  padding: 1rem 1rem;

  display: flex;
  justify-content: space-between;

  @media${device.mobileM} {
    padding: 2rem 2rem;
    border-radius: 2.4rem;
    margin-top: 4rem;
  }

  @media${device.laptop} {
    padding: 6rem 2rem;
    // min-height: 600px;
    // height: 600px;
  }
`;

export const CollapserContainer = styled.div`
  width: 100%;

  @media${device.laptop} {
    width: 50%;
  }
`;

export const GTImage = styled.div`
  display: none;

  @media ${device.laptop} {
    width: 45%;
    height: 100%;
    border-radius: 2.4rem;
    // background-color: #fff;
    display: block;

    img {
      width: 550px;
      height: 550px;
      border-radius: 1.8rem;
    }
  }

  @media ${device.laptopL} {
    img {
      width: 100%;
      height: 660px;
      border-radius: 1.8rem;
    }
  }
`;

export const DividerContainer = styled.div`
  margin: 1rem 0;
`;
