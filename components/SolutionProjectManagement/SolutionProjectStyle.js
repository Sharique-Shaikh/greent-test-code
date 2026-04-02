import styled from 'styled-components';
import { device } from '../../styles/theme';

export const ProjectWrapper = styled.div`
  background-color: #dde9fb;
  border-radius: 24px;
  position: relative;
  padding: 5rem 1rem;
  z-index: 1;
  overflow: hidden;
  @media ${device.laptop} {
    padding: 5rem;
  }
  @media ${device.tablet} {
    padding: 5rem;
  }
`;

export const TopImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const ProjectManageWrap = styled.div`
  display: block;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    grid-template-columns: 1fr;
  }
`;

export const ImageColumn = styled.div`
  grid-column: 2 / 3;
`;

export const ProjectContentColumn = styled.div`
  grid-column: 1 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProjectContentTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #222222;
  @media ${device.laptop} {
    font-size: 40px;
  }
  @media ${device.tablet} {
    font-size: 35px;
    font-weight: 700;
  }
`;

export const ProjectSubContent = styled.div`
  color: #222222;
  font-weight: 400;
  margin-top: 5rem;
  font-size: 16px;
  margin-right: 0rem;
  @media ${device.laptop} {
    font-size: 20px;
    margin-right: 20rem;
  }
  @media ${device.tablet} {
    font-size: 20px;
    margin-right: 0rem;
  }
`;

export const BottomImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
`;
