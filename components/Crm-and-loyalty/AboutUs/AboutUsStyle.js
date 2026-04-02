import { device } from '@/styles/theme';
import Image from 'next/image';
import { styled } from 'styled-components';

export const ContainerWrapper = styled.div`
  height: 35rem;
  width: 100%;
  margin-top: 2rem;
  overflow: hidden;
`;

export const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (${device.laptop}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FeatureImage = styled(Image)`
  height: 50%;
  width: 70%;
  border-radius: 1rem;

  @media (${device.laptop}) {
    width: 40%;
    height: 100%;
  }
`;

export const FeatureData = styled.div`
  padding: 1rem 1rem 1.5rem;

  @media (${device.laptop}) {
    padding: 0 2.5rem;
    height: 100%;
  }
`;

export const FeatureTitle = styled.h2`
  color: ${(props) => props.theme.MadBlack};
  font-size: 1.8rem;
  font-weight: 400;
`;

export const FeatureSubTitle = styled.h4`
  margin-top: 1rem;
  font-weight: 200;
`;

export const FeatureSubGrid = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    margin-top: 5rem;
  }
`;

export const ImageWrapper = styled.div`
  height: 35px;
  width: 35px;
  background-color: #f0f5f0;
  border-radius: 2rem;
  padding: 1px;

  img {
    height: 30px;
    width: 30px;
    object-fit: cover;
  }
`;

export const FeatureDiv = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 1rem;
  }
`;
