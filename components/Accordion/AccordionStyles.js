import styled from 'styled-components';
import { device } from '../../styles/theme';

export const AccordionContainer = styled.div`
  background-color: white;
  border-radius: 16px;
  margin-top: 20px;
  box-shadow: 0 2px 6px hsla(45, 100%, 15%, 0.15);
  border: 2px solid ${({ isOpen }) => (isOpen ? '#00b894' : 'transparent')};
  @media ${device.tablet} {
    width: 400px;
  }

  @media ${device.laptop} {
    background-color: white;
    border-radius: 16px;
    margin-top: 20px;
    box-shadow: 0 2px 6px hsla(45, 100%, 15%, 0.15);
    width: 670px;
    border: 2px solid ${({ isOpen }) => (isOpen ? '#00b894' : 'transparent')};
  }
`;

export const AccordionHeader = styled.div`
  background-color: white;
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 16px;
  color: #222222;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AccordionTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  margin-right: 10px;

  @media ${device.tablet} {
    font-size: 15px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
`;

export const AccordionContent = styled.div`
  padding: 15px 20px;
  color: #777777;
  font-size: 20px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const AccordionNumber = styled.div`
  margin-right: 10px;
  font-size: 20px;
  color: #222222;
  font-weight: 600;
`;

export const AccordionArrow = styled.div`
  margin-left: auto;
  width: 35px;
  height: 35px;
`;
