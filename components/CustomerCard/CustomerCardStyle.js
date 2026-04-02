import styled from 'styled-components';
import { device } from '@/styles/theme';

export const CardContainer = styled.div`
  min-height: 100%;
  background-color: #fff;
  border-radius: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  margin: 0 1rem;

  @media ${device.laptop} {
    min-width: 80%;
    background-color: #fff;
    border-radius: 2.4rem;

    flex-direction: row;

    padding: 6rem 3rem;
    margin-right: 4rem;
  }
`;

export const CustomerProfile = styled.div``;

export const ProfileLogo = styled.div`
  // img {
  //   height: 500px;
  //   width: 500px;
  // }

  width: 100px;
  display: flex;
`;

export const CustomerName = styled.h3`
  font-weight: 500;
  font-size: 1.8rem;
  margin-top: 1.2rem;
  color: ${(props) => props.theme.MineShaft};
  display: hidden;

  @media ${device.laptop} {
    font-size: 2.4rem;
    margin-top: 1.8rem;
    display: hidden;
  }
`;

export const CustomerDesignation = styled.h5`
  font-weight: 700;
  font-size: 1.8rem;
  color: ${(props) => props.theme.Boulder};
  margin-top: 1.2rem;
  span {
    color: #5f5f5f80;
    margin: 0 0.2rem;
  }

  @media ${device.laptop} {
    margin-top: 1.4rem;
  }
`;

export const CustomerReviewTitle = styled.h3`
  font-size: 2.4rem;
  line-height: 32px;
  font-weight: 700;
  color: ${(props) => props.theme.MineShaft};
  text-align: center;

  @media ${device.laptop} {
    text-align: left;
  }
`;

export const CustomerReview = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.2rem;
  color: ${(props) => props.theme.MineShaft};
  opacity: 70%;

  @media ${device.mobileM} {
    margin-top: 1rem;
  }

  @media ${device.laptop} {
    text-align: left;
    font-weight: 400;
    font-size: 2rem;
    line-height: 3.2rem;
  }
`;

export const Divider = styled.div`
  display: none;

  @media ${device.laptop} {
    height: 180px;
    border-right: 1px solid #054d3c66;
    margin: 0 3rem;
    display: block;
  }
`;
