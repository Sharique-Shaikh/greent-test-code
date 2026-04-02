import styled from 'styled-components';
import { device } from '../../styles/theme';

export const ProductSuccessWrap = styled.div`
  background-color: #ece2f2;
  border-radius: 24px !important;
  position: relative;
  z-index: 1;
  overflow: hidden;
  @media ${device.laptop} {
  }
  @media ${device.tablet} {
  }
`;

export const TopImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
`;
export const BottomImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  @media ${device.laptop} {
    top: 80px;
  }
  @media ${device.tablet} {
    top: 60px;
  }
`;

export const ProductSuccessContainer = styled.div`
  display: flex;
  gap: 4rem;
  overflow-x: auto;
  width: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
  @media ${device.laptop} {
    margin: 5rem 3rem;
  }
  @media ${device.tablet} {
    margin: 5rem 3rem 0;
  }
`;

export const ProductCardWrap = styled.div`
  flex: 0 0 auto; /* Make sure the cards do not shrink */
  box-sizing: border-box;
  padding: 0 10px;
  width: 700px;
  height: 334px;
  border-radius: 24px;
  background-color: white;
  padding: 2rem 3rem;
  scroll-snap-align: start;
  &:last-child {
    margin-right: 6rem; /* Add margin-right to the last card */
  }
`;

export const ProductContentWrap = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 8fr;
  gap: 20px;
`;

export const ImageContainer = styled.div`
  background-color: #efefef;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: auto;
`;

export const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const VerticalLine = styled.div`
  display: block;
  width: 100%;
  border-left: 1.5px solid #cfdae0;
`;

export const SmallVerticalLine = styled.div`
  width: 20px;
  border: 1.5px solid #cfdae0;
  rotate: calc(90deg);
`;
export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
`;

export const CardTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const CardContent = styled.div`
  color: #777777;
  font-size: 20px;
  font-weight: 400;
  margin: 3rem 0;
`;

export const CardPercentWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const CardPercent = styled.div`
  color: #222222;
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
`;
