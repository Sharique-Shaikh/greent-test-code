import { device } from '@/styles/theme';
import Image from 'next/image';
import styled from 'styled-components';

export const TabContentWrapper = styled.div`
  padding: 0;

  @media ${device.laptop} {
    padding: 2rem 4rem;
  }
`;

export const PracticeTabContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

export const TabsContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 200px;
  display: flex;

  justify-content: center;
  align-items: center;

  @media ${device.mobileM} {
    height: 45px;
  }

  @media ${device.laptop} {
    height: 58px;
    flex-direction: row;
  }
`;

export const TabWrapper = styled.div`
  padding: 1rem;

  @media ${device.laptop} {
    padding: 2rem 19rem;
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    padding: 2rem 8rem;
  }
`;

export const Tabs = styled.div`
  width: 20%;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props?.tabSelect ? props.theme.MadGreenish : ''};
  color: ${(props) => (props?.tabSelect ? '#fff' : '#000')};
  border-radius: 100px;
  margin: 0.4rem;

  @media ${device.mobileM} {
    height: 60%;
    padding: 18px 0;
    width: 40%;
  }

  @media ${device.laptop} {
    height: 85%;
    padding: 1rem;
  }
`;

export const TabTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 500;

  @media ${device.laptop} {
    font-size: 1.8rem;
  }
`;

export const TabContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem;
  padding: 1 0.5rem 2.5rem;
  justify-items: center;
  align-items: center;

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
    gap: 7rem;
  }
`;

export const TabLeft = styled.div`
  width: 100%;
`;

export const TabRight = styled.div``;

export const TabContentTitle = styled.h3`
  font-weight: 700;
  margin-bottom: 0.85rem;
  letter-spacing: -1px;
  font-size: 3rem;
  line-height: 45px;
  color: ${(props) => props.theme.MineShaft};

  @media ${device.laptop} {
    margin-bottom: 0.85rem;

    font-size: 5rem;
    line-height: 65px;
  }
`;

export const TabContentDescription = styled.p`
  line-height: 28px;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  color: ${(props) => props.theme.MineShaft};
  margin-top: 1rem;
  font-weight: 400;

  @media ${device.laptop} {
    line-height: 34px;
    margin-bottom: 1rem;
    font-size: 2rem;
    margin-top: 1rem;
  }
`;

export const TabImage = styled(Image)``;

export const TabBreaker = styled.div`
  margin-top: 3rem;
`;

export const TabHighLightContent = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
  color: ${(props) => props.theme.MineShaft};

  @media ${device.laptop} {
    font-weight: 700;
    font-size: 2rem;
  }
`;
