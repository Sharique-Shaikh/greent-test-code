import { device } from '@/styles/theme';
import styled from 'styled-components';
import Image from 'next/image';

export const CrmGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 1rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
    margin-top: 5.5rem;
    height: 100%;
  }
`;

export const CrmImageWrapper = styled.div``;

export const CrmImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

export const CrmImageContent = styled.div``;

export const CrmContent = styled.div`
  margin-bottom: 1.8rem;
`;

export const CrmHeading = styled.h3`
  @media ${device.laptop} {
    font-size: 2.4rem;
    color: ${(props) => props.theme.MikadoGreen};
  }
`;

export const CrmTextWrapper = styled.div``;

export const CrmText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 0.7rem;
  padding-bottom: 1rem;
`;

// export const ProgressBar = styled.div`
//   width: 100%;
//   height: 2px;
//   border-bottom: 1px solid #d6e0da;
// `;
export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 2px;
  background-color: #d6e0da;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: #007f62;
  border-bottom: 3px solid #007f62;
`;
