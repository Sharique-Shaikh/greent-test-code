import styled from 'styled-components';
import { device } from '@/styles/theme';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  /* @media ${device.laptop} {
    flex-direction: row;
  }

  @media ${device.laptopL} {
    align-items: center;
  } */
`;

export const StatisticsContent = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;

 @media ${device.laptop} {
  gap:5rem;   
  display: flex;
  flex-direction: row;
  justify-content: center;
  }
  /*
  @media ${device.laptopL} {
    width: 20%;
  } */
`;

export const StatisticsArea = styled.div`
  @media ${device.laptopL} {
    width: 100%;
    max-width: 900px;
    margin-inline: auto;

    img {
      width: 100%;
    }
  }
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 90px; */
  text-align: center;

  img {
    height: 100px;
  }
  /* @media ${device.laptop} { } */
`;

export const StatisticsCount = styled.p`
  font-weight: 700;
  font-size: 2.2rem;
  color: ${(props) => props.theme.BurntSienna};

  @media ${device.laptop} {
    font-size: 4.2rem;
  }
`;

export const StatisticsTitle = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  color: ${(props) => props.theme.MineShaft};
`;

export const StatisticsData = styled.div`
  margin-left: 1rem;
`;
