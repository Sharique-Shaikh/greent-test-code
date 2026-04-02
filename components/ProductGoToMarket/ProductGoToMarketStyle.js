import styled from 'styled-components';
import { device } from '../../styles/theme';

export const ProductMarketWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  // margin-top: 5rem;
  @media ${device.laptop} {
    grid-template-columns: 5fr 7fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 5fr 7fr;
  }
`;

export const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ContentTitle = styled.div`
  font-size: 26px;
  color: #222222;
  font-weight: 700;
  margin-bottom: 10rem;
  text-align: left;
  @media ${device.laptop} {
    font-size: 42px;
    line-height: px;
  }
  @media ${device.laptop} {
    font-size: 32px;
    line-height: px;
  }
`;

export const ContentOneCont = styled.div`
  font-size: 15px;
  color: #222222;
  font-weight: 600;
  margin-top: 2rem;
  text-align: left;
  @media ${device.laptop} {
    font-size: 20px;
    line-height: 32px;
  }
  @media ${device.tablet} {
    font-size: 20px;
    line-height: 32px;
  }
`;

export const ContentSubCont = styled.div`
  font-size: 15px;
  color: #222222;
  font-weight: 400;
  margin-top: 2rem;
  text-align: left;
  @media ${device.laptop} {
    font-size: 20px;
    line-height: 32px;
  }
  @media ${device.tablet} {
    font-size: 20px;
    line-height: 32px;
  }
`;

export const ContentSubTitle = styled.div`
  font-size: 15px;
  color: #222222;
  font-weight: 600;
  margin-top: 2rem;
  text-align: left;
  @media ${device.laptop} {
    font-size: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  text-align: left;
  @media ${device.laptop} {
    width: 350px;
    margin-top: 3rem;
  }
  @media ${device.tablet} {
    width: 300px;
    margin-top: 3rem;
  }
`;

export const FastWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

export const FastTitle = styled.div`
  font-size: 18px;
  color: black;
  margin-left: 1rem;
  text-align: left;
  @media ${device.laptop} {
    font-size: 24px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
`;

export const MarketCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin: 0rem 2rem;

  @media (min-width: 1100px) and (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
`;

export const MarketCard = styled.div`
  background-color: #ffffff;
  border-radius: 32px;
  width: 250px;
  height: 300px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 6px hsla(45, 100%, 15%, 0.15);
  margin: 2rem 0;

  @media ${device.tablet} {
    width: 300px;
    height: 380px;
    padding-top: 5rem;
  }

  @media ${device.laptop} {
    width: 300px;
    height: 380px;
    padding-top: 5rem;
  }

  @media ${device.laptopL} {
    width: 420px;
  }

  @media (min-width: 1100px) and (max-width: 1300px) {
    width: 450px;
  }
`;

export const CardTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #222222;
  word-wrap: break-word; /* Ensures text wraps */

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
  margin-top: auto;
  margin-bottom: 7rem;

  @media ${device.laptop} {
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
`;
