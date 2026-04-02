// import styled from 'styled-components';
// import { device } from '../../styles/theme';

// export const TechCardWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 0px;
//   margin-bottom: 5rem;
// `;

// export const TechCard = styled.div`
//   background-color: white;
//   background-color: #ffffff;
//   border-radius: 32px;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   padding: 2rem;
//   width: 280px;
//   height: 300px;
//   margin: 2rem;

//   @media ${device.laptop} {
//     width: 300px;
//     height: 440px;
//   }

//   @media ${device.tablet} {
//     width: 300px;
//     height: 440px;
//   }
// `;

// export const Title = styled.div`
//   font-size: 18px;
//   margin-bottom: 15px;
//   color: #222222;
//   text-align: start;
//   font-weight: 700;
//   @media ${device.laptop} {
//     font-size: 24px;
//   }
//   @media ${device.tablet} {
//     font-size: 24px;
//   }
// `;

// export const Description = styled.p`
//   font-size: 15px;
//   text-align: start;
//   color: #777777;
//   @media ${device.laptop} {
//     font-size: 18px;
//   }
//   @media ${device.tablet} {
//     font-size: 18px;
//   }
// `;

import styled from 'styled-components';
import { device } from '../../styles/theme';

export const TechCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0px;
  margin-bottom: 5rem;

  @media (min-width: 1100px) and (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
`;

export const TechCard = styled.div`
  background-color: #ffffff;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 280px;
  height: auto;
  margin: 2rem;
  align-items: start;

  @media ${device.tablet} {
    width: 300px;
    height: 440px;
  }

  @media ${device.laptop} {
    width: 300px;
    height: 440px;
    padding: 3rem;
  }

  @media ${device.laptopL} {
    width: 400px;
  }

  @media (min-width: 1100px) and (max-width: 1300px) {
    width: 480px;
    height: 400px;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  margin: 15px 0;
  color: #222222;
  font-weight: 700;

  @media ${device.laptop} {
    font-size: 24px;
  }
  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-size: 15px;
  color: #777777;
  flex-grow: 1;

  @media ${device.laptop} {
    font-size: 18px;
    padding: 3rem 0;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
`;
