import styled from 'styled-components';
import { device } from '../../styles/theme';

export const CountryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10rem;
  margin-bottom: ${(props) => (props?.mb ? props.mb : 0)};
  // margin-bottom: 10rem;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${device.mobileS} {
    margin-top: 5rem;
  }
  @media ${device.mobileM} {
    margin-top: 5rem;
  }
  @media ${device.mobileL} {
    margin-top: 5rem;
  }

  @media ${device.laptopL} {
    margin-top: 15rem;
  }
`;

export const CountryItemWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #77777780;
  background-color: white;
  width: fit-content;
  height: 48px;
  border-radius: 300px;
  padding: 2rem 5rem;
  margin: 0 5rem;

  @media ${device.mobileS} {
    margin: 0 2rem;
  }
  @media ${device.mobileL} {
    margin: 0 2rem;
  }
  @media ${device.mobileM} {
    margin: 0 2rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 1px;
    border-top: 3.5px dotted #222222;
    left: -41px;
  }

  &:last-child:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 1px;
    border-top: 1.5px dashed #77777780;
    right: -40px;
  }
`;

export const CountryTitle = styled.div`
  font-size: 16px;
  margin-left: 1rem;
`;
