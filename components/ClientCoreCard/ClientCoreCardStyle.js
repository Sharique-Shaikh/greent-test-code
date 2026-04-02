import { device } from '@/styles/theme';
import styled from 'styled-components';

export const ClientCard = styled.div`
  background-color: #ffffff;
  border-radius: 32px;
  width: 250px;
  height: 300px;
  padding: 2rem;
  text-align: left;

  @media ${device.tablet} {
    width: 340px;
    height: 400px;
    padding-top: 4rem;
  }

  @media ${device.laptop} {
    width: 340px;
    height: 400px;
    padding-top: 4rem;
  }

  @media ${device.laptopL} {
    width: 500px;
  }

  @media (min-width: 1100px) and (max-width: 1300px) {
    width: 300px;
  }
`;

export const ClientCoreIcon = styled.div`
  margin-bottom: 5rem;

  img {
    height: 50px !important;
    width: 50px !important;
  }
`;

export const CardTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #222222;

  @media ${device.laptop} {
    font-size: 30px;
    margin-top: 2rem;
  }
  @media ${device.tablet} {
    font-size: 25px;
    margin-top: 2rem;
  }
`;

export const CardContent = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #777777;
  line-height: 24px;
  margin-top: 10px;

  @media ${device.laptop} {
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
`;

export const ArrowWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 3rem 0 0;
`;
