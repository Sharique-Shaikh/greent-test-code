import { device } from '@/styles/theme';
import styled from 'styled-components';

const StyledCenteredText = styled.div`
  text-align: center;
  position: relative;
  padding: 10px 0; /* Adjust as needed */
  font-weight: 700;
  font-size: 1.6rem;
  color: #ffffff;
  opacity: 50%;
`;

const Line = styled.div`
  content: '';
  position: absolute;
  top: 50%;
  width: 46%;
  height: 1px;
  transform: translateY(-50%);
`;

const LeftLine = styled(Line)`
  left: -35px;
  background: linear-gradient(
    270deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 110.96%
  );

  @media ${device.laptop} {
    left: 0;
  }
`;

const RightLine = styled(Line)`
  right: -35px;
  background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);

  @media ${device.laptop} {
    right: 0;
  }
`;

const CenteredTextWithLines = ({ children }) => (
  <StyledCenteredText>
    <LeftLine />
    {children}
    <RightLine />
  </StyledCenteredText>
);

export default CenteredTextWithLines;
