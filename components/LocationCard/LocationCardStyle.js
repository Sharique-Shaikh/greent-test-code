import { device } from '@/styles/theme';
import styled from 'styled-components';

export const CardContainer = styled.div`
  min-height: 100%;
  width: 95%;
  background-color: rgba(255, 255, 255, 12%);
  border-radius: 1.2rem;
  display: flex;
  padding: 3rem 1.5rem;
`;

export const LocationLogo = styled.div`
  img {
    height: 60px !important;
    width: 90px !important;
  }
`;

export const LocationDetails = styled.div`
  margin-top: 1rem;
`;

export const CountryName = styled.h3`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
  color: #ffffff;
`;

export const Address = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: #ffffff;
  opacity: 80%;
  margin-top: 2px;
`;

export const Contact = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #fff;
  margin-left: 10px;
  opacity: 80%;
  cursor: pointer;
`;

export const ContactMail = styled.a`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #fff;
  opacity: 80%;
  margin-left: 10px;
  cursor: pointer;
`;

export const ContactDiv = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;

  img {
    height: 20px !important;
    width: 20px !important;
  }
`;

export const ContactMailDiv = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;

  img {
    height: 20px !important;
    width: 20px !important;
  }
`;

export const CountryDiv = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 7px;
    height: 30px !important;
    width: 30px !important;
  }
`;

export const DescriptionWrapper = styled.div`
  @media ${device.mobileM} {
    margin-top: 1.5rem;
  }
`;
