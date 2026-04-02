import { device } from '@/styles/theme';
import { styled } from 'styled-components';

export const LoyaltyWrapper = styled.div`
  background-color: #ece2f2;
  background-image: url(/assets/images/LPMBg.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 300px;
  width: 100%;
  border-radius: 2.4rem;
  padding: 4rem 0 4rem 1rem;

  @media ${device.laptop} {
    padding: 8rem 0 6rem 3rem;
  }
`;
