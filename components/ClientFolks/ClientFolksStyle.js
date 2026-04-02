import styled from 'styled-components';
import { device } from '../../styles/theme';
import Link from 'next/link';

export const FolksContainer = styled.div`
  background-color: #dde9fb;
  border-radius: 24px;
  z-index: 1;
  position: relative;
  padding: 1rem 0 5rem;
`;
export const TopImageContainer = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;

export const BottomImageContainer = styled.div`
  z-index: -1;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const LeftMiddleImage = styled.div`
  z-index: -1;
  position: absolute;
  top: 40%;
  left: 0;
  overflow: hidden;
`;

export const RightMiddleImage = styled.div`
  z-index: -1;
  position: absolute;
  top: 50%;
  right: 0;
  overflow: hidden;
`;

export const RightBottomImage = styled.div`
  z-index: -1;
  position: absolute;
  top: 10%;
  right: 0;
  overflow: hidden;
`;

export const FolksTitle = styled.div`
  color: #222222;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding-top: 8rem;
  @media ${device.laptop} {
    font-size: 40px;
    line-height: 52.08px;
  }
  @media ${device.laptop} {
    font-size: 35px;
    line-height: 52.08px;
  }
`;

export const FolksCardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    gap: 5rem;
    margin-top: 5rem;
  }

  @media ${device.tablet} {
    gap: 3rem;
  }
`;

export const SeeAllContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin: 4rem 0 2rem 1rem;
  }
`;

export const SeeAll = styled.p`
  color: #222222;
  font-size: 18px;
  font-weight: 400;
  margin: 4rem 0 2rem;
  cursor: pointer;
  text-align: center;

  @media ${device.laptop} {
    font-size: 24px;
  }
`;
