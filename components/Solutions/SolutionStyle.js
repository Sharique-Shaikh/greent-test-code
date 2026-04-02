import styled from 'styled-components';
import { device } from '../../styles/theme';

export const SolutionBanner = styled.div`
  background-color: ${(props) => props.theme.Snuff};
  background-image: url('/assets/images/solutionBanner.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 300px;
  width: 100%;
  border-radius: 2.4rem;
  padding: 8rem 0;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  margin-top: 4rem;

  @media ${device.laptop} {
    font-size: 40px;
    margin-top: 2rem 0;
  }
  @media ${device.tablet} {
    margin-top: 6rem;
  }
`;

export const ButtonLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #007f62;
  margin: 2rem 0 0;
  position: relative;
`;

export const ButtonDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 200px;
  border: 1px solid #cfdae0;
  background-color: #ffffff;
  padding: 1rem;
  width: 200px;
  @media ${device.laptop} {
    padding: 2.5rem;
    width: 300px !important;
  }
  @media ${device.tablet} {
    padding: 2rem;
    width: 250px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);

  @media ${device.laptop} {
    top: -75px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media ${device.tablet} {
    top: -75px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
