import styled from 'styled-components';
import { device } from '../../styles/theme';

export const EnterpriseWrapper = styled.div`
  display: block;
  align-items: center;
  width: 100%;
  margin-top: 8rem;
  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 8rem;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 8rem;
  }
`;

export const EnterpriseFirstDiv = styled.div`
  width: 100%;
  text-align: start;
  margin-bottom: 2rem;
`;

export const EnterpriseFirstDivCont = styled.div`
  color: #222222;
  font-size: 18px;
  font-weight: 500;

  @media ${device.laptop} {
    font-size: 20px;
    line-height: 32px;
    color: #222222;
  }
`;

export const EnterpriseBestTech = styled.div`
  color: #222222;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  @media ${device.laptop} {
    font-size: 20px;
  }
`;

export const EnterpriseDiv = styled.div`
  width: 100%;
  text-align: start;
  margin-bottom: 2rem;
  color: #222222;
  font-size: 20px;

  @media ${device.tablet} {
    width: 50%;
    font-size: 16px;
    font-weight: 500;
  }

  @media ${device.laptop} {
    width: 100%;
    font-size: 24px;
    font-weight: 500;
  }
`;

export const VerticalLine = styled.div`
  display: none;
  @media ${device.laptop} {
    display: block;
    width: 100%;
    border: 1px solid #cfdae0;
    rotate: calc(90deg);
  }
  @media ${device.tablet} {
    display: block;
    width: 100%;
    max-width: 250px;
    border: 1px solid #cfdae0;
    rotate: calc(90deg);
  }
`;

export const EnterpriseFirstNumber = styled.div`
  display: block;
  align-items: center;
  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NumberDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: start;
`;

export const NumberCont = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 2rem;
  color: #222222;

  @media ${device.laptop} {
    font-size: 34px;
    font-weight: 700;
  }

  @media ${device.tablet} {
    font-size: 30px;
    font-weight: 700;
  }
`;

export const NumberSubDiv = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #222222;
  margin-top: 2rem;

  @media ${device.laptop} {
    font-size: 16px;
    padding-top: 3rem;
  }
  @media ${device.tablet} {
    font-size: 14px;
    padding-top: 3rem;
  }
`;

export const EnterpriseSecondDiv = styled.div`
  font-size: 20px;
  font-weight: 600;
  @media ${device.laptop} {
    font-size: 24px;
  }
  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const EnterpriseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`;

export const EnterpriseSub = styled.p`
  font-size: 2rem;
  line-height: 32px;
  margin-top: 1rem;
`;
