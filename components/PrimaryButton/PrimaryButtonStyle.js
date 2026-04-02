import { device } from '@/styles/theme';
import { styled } from 'styled-components';

export const ConsultButton = styled.button`
  position: relative;
  color: #fff;
  font-weight: 600;
  width: ${(props) => props?.btnWidth || '75%'};
  font-size: 1.2rem;
  padding: 1rem 2rem;

  transition: 0.3s;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => props?.bgColor};
  border: 1px solid ${(props) => props?.bgColor};
  color: ${(props) => props?.color};
  border-radius: 3.2rem;
  box-shadow: 0px 5px 12px 0px #007f6252;
  text-align: ${(props) => props?.textalign || 'left'};

  &:hover {
    background: transparent;
    color: ${(props) => (!props.bgHover ? props.theme.MikadoGreen : '#fff')};
  }

  // need to update btn style
  //   font-size: 2rem;
  //   padding: 1.8rem 3.4rem;

  @media ${device.mobileL} {
    width: ${(props) => props?.btnWidth || '75%'};
  }

  @media ${device.tablet} {
    font-size: 1.6rem;
    padding: 1.8rem 2.4rem;
    width: ${(props) => props?.btnWidth || '75%'};
  }

  @media ${device.laptop} {
    width: ${(props) => props?.btnWidth || '75%'};
  }

  // @media (min-width: 1100px) and (max-width: 1200px) {
  //   width: 35%;
  // }
`;

export const ScheduleBtn = styled.button`
  position: relative;
  color: #fff;
  font-weight: 600;
  width: ${(props) => props?.btnWidth || '75%'};
  font-size: 1.2rem;
  padding: 1rem 2rem;

  transition: 0.3s;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => props?.bgColor};
  border: 1px solid ${(props) => props?.bgColor};
  color: ${(props) => props?.color};
  border-radius: 3.2rem;
  box-shadow: 0px 5px 12px 0px #007f6252;
  text-align: ${(props) => props?.textalign || 'left'};

  &:hover {
    background: transparent;
    // color: ${(props) => props.theme.MikadoGreen};
    color: ${(props) => (!props.bgHover ? props.theme.MikadoGreen : '#fff')};
  }

  @media ${device.mobileL} {
    width: ${(props) => props?.btnWidth || '75%'};
  }

  @media ${device.tablet} {
    font-size: 1.6rem;
    padding: 1.8rem 2.4rem;
    width: ${(props) => props?.btnWidth || '75%'};
  }

  @media ${device.laptop} {
    width: ${(props) => props?.btnWidth || '75%'};
  }

  @media (min-width: 1000px) and (max-width: 1200px) {
    width: 35%;
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;

  border-radius: 100rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 4px;
  width: 3.2rem;
  height: 3.2rem;

  @media ${device.mobileM} {
    top: 1px;

    img {
      height: 55px;
      width: 95px;
    }
  }

  @media ${device.laptop} {
    top: 5px;
    right: 10px;
    width: 4.2rem;
    height: 4.2rem;
  }
`;
