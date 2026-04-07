import styled from 'styled-components';
import { device } from '@/styles/theme';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  @media ${device.laptop} {
    flex-direction: row;
  }

  @media ${device.laptopL} {
    align-items: center;
  }
`;

export const StatisticsContent = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: column;
    justify-content: space-between;
    height: 30%;
    gap: 40px;
    width: 30%;
  }

  @media ${device.laptopL} {
    width: 20%;
  }
`;

export const StatisticsArea = styled.div`
  @media ${device.laptopL} {
    width: 50%;

    img {
      width: 100%;
    }
  }
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 90px;

  @media ${device.laptop} {
    img {
      height: 100px;
    }
  }
`;

export const StatisticsCount = styled.p`
  font-weight: 700;
  font-size: 2.2rem;
  color: ${(props) => props.theme.BurntSienna};

  @media ${device.laptop} {
    font-size: 4.8rem;
  }
`;

export const StatisticsTitle = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  color: ${(props) => props.theme.MineShaft};
  
  @media ${device.laptop} {
    font-size: 2.2rem;
  }
`;

export const StatisticsData = styled.div`
  margin-left: 1rem;
`;