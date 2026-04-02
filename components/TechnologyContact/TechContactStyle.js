import { device } from '@/styles/theme';
import { styled } from 'styled-components';

export const BusinessSolutionWrapper = styled.div`
  background-color: #007f62;
  border-radius: 32px;
  padding: 1rem 0;
  margin: 5rem 8rem 0;
  @media ${device.mobileS} {
    margin: 1rem 2rem 0;
  }
  @media ${device.mobileM} {
    font-size: 20px;
  }
`;

export const BusinessSectionTitle = styled.h2`
  color: ${(props) => props.theme.Alabaster};
  text-align: center;
  margin-bottom: 1rem;
  @media ${device.mobileS} {
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: -1.5px;
  }

  @media ${device.mobileM} {
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: -1.5px;
  }

  @media ${device.tablet} {
    margin-bottom: 1.5rem;
    font-size: 4rem;
  }

  @media ${device.laptop} {
    margin-bottom: 1.5rem;
    font-size: 3rem;
    font-weight: 600;
  }
`;

export const BusinessSectionDescription = styled.p`
  color: ${(props) => props.theme.Alabaster};
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 400;

  @media ${device.tablet} {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    line-height: 2.8rem;
  }

  @media ${device.laptop} {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    line-height: 2.6rem;
  }
`;

export const BusinessBtn = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BusinessContact = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;

  p {
    color: #fff;
  }
`;

export const ContactInfoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  flex-direction: column;

  @media ${device.mobileS} {
    margin: 3rem 0;
  }

  @media ${device.mobileM} {
    margin: 5rem 0;
    gap: 2rem;
  }

  @media ${device.laptopM} {
    flex-direction: row;
    padding: 0 22%;
    margin: 3rem 0;
  }

  @media ${device.laptopL} {
    justify-content: center;
  }

  @media (min-width: 1200px) and (max-width: 1300px) {
    padding: 0 18%;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContactInfo = styled.div`
  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media ${device.laptop} {
    display: flex;
    align-items: center;
    font-size: 2rem;
    flex-direction: row;
  }

  p {
    font-weight: 400;
    color: #fff;
    opacity: 80%;
    text-align: center;
    font-size: 2rem;

    @media ${device.mobileM} {
      font-size: 1.6rem;
    }

    @media ${device.laptop} {
      font-size: 2rem;
    }
  }
`;

export const ContactNo = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobileM} {
    margin-left: -10px;
  }

  a {
    font-weight: 400;
    color: #fff;
    opacity: 80%;
    margin-left: 1rem;
    font-size: 1.4rem;
    cursor: pointer;

    @media ${device.mobileM} {
      font-size: 1.6rem;
    }

    @media ${device.laptop} {
      font-size: 2rem;
      margin-left: 1rem;
    }
  }

  img {
    @media ${device.mobileM} {
      height: 20px;
      width: 20px;
    }

    @media ${device.laptop} {
      height: 30px;
      width: 30px;
    }
  }
`;

export const Breaker = styled.div`
  @media ${device.mobileM} {
    display: none;
  }

  @media ${device.laptop} {
    font-size: 2rem;
    color: #fff;
    opacity: 40%;
    display: block;
  }
`;
