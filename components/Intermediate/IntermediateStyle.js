import styled from 'styled-components';
import Image from 'next/image';
import { device } from '@/styles/theme';

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.MikadoGreen};
  background-image: url(https://assets-global.website-files.com/64f5860a51eba2b0f119b318/654dd6417a85bb84853512a9_background-circles.svg);
  background-size: cover;
  padding: 6rem 0;
  overflow: hidden;
`;

export const IntermediateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContactWrapper = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin-top: 2rem;
`;

export const ContactImage = styled(Image)`
  width: 9rem;
  height: 9rem;
  object-fit: cover;
`;

export const ContactTitle = styled.h2`
  color: #fff;
  font-weight: 600;
  line-height: 1.5;
  margin: 2rem 0;
`;

export const Divider = styled.div`
  border-bottom: 1px solid #fff;
  font-size: 12px;
  width: 40rem;
  margin-top: 1rem;

  @media ${device.laptop} {
    border-right: 1px solid #fff;
    font-size: 10px;
    height: 40rem;
    width: 0;
    border-bottom: 0;
  }
`;

export const ContactButton = styled.button`
  background-color: #fff;
  color: #000;
  font-weight: 600;
  border-radius: 1rem;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  text-align: center;
  transition: 0.3s;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.MikadoGreen};
    border: 1px solid #fff;
    color: #fff;
  }

  @media ${device.tablet} {
    font-size: 1.6rem;
    padding: 1.3rem 2.4rem;
  }
`;
