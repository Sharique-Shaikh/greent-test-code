import styled from 'styled-components';
import { device } from '../../styles/theme';

export const LineBreak = styled.div`
  line-height: 1.5;
`;

export const GridContainer = styled.div`
  display: block;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    gap: 20px; /* Adjust the gap between columns */
  }
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr; /* Two equal columns */
    gap: 20px;
    grid-template-columns: 1fr;
  }
`;

export const ImageColumn = styled.div`
  grid-column: 1 / 2; /* Place in the first column */
  display: flex;
  align-items: center;

  @media${device.laptopL} {
    img {
      width: 80%;
    }
  }
`;

export const AccordionColumn = styled.div`
  grid-column: 2 / 3; /* Place in the second column */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DigitalCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 5rem;
`;

export const CardTitle = styled.h3`
  margin-top: 10px;
  font-size: 16px;
  color: #222222;
  font-size: 24px;
  cursor: pointer;
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
`;

// export const CardSubcontent = styled.p`
//   margin-top: 20px;
//   font-size: 15px;
//   color: #777777;
//   line-height: 1.5;
//   text-align: center;
//   padding: 0 20px;
//   max-height: 0;
//   opacity: 0;
//   overflow: hidden;
//   transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;

//   @media ${device.laptop} {
//     font-size: 18px;
//   }
//   @media ${device.tablet} {
//     font-size: 18px;
//   }
// `;

export const CardSubcontent = styled.p`
  margin-top: 20px;
  font-size: 15px;
  color: #777777;
  line-height: 1.5;
  text-align: center;
  padding: 0 20px;

  @media ${device.laptop} {
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
`;

export const Card = styled.div`
  width: 420px;
  height: 320px;
  padding: 20px;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px hsla(45, 100%, 15%, 0.15);
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border: 2px solid #007f62;
    transition: 1s;
  }
`;

// export const Card = styled.div`
//   width: 420px;
//   height: 320px;
//   padding: 20px;
//   background-color: white;
//   border-radius: 24px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   box-shadow: 0 2px 6px hsla(45, 100%, 15%, 0.15);
//   cursor: pointer;
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//     border: 2px solid #007f62;
//   }

//   &:hover ${CardSubcontent} {
//     max-height: 100px;
//     opacity: 1;
//   }
// `;
