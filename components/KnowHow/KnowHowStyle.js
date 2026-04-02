import { device } from '@/styles/theme';
import Image from 'next/image';
import { styled } from 'styled-components';

export const ContainerWrapper = styled.div`
  background-color: #f0f5f0;
  height: 35rem;
  width: 100%;
  border-radius: 0.8rem;
  overflow: hidden;
`;

export const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media ${device.laptop} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FeatureImage = styled(Image)`
  height: 100%;
  width: 100%;

  @media (${device.laptop}) {
    width: 40% !important;
  }
`;

export const FeatureData = styled.div`
  padding: 1rem 1rem 2.5rem;
  text-align: left;

  @media (${device.laptop}) {
    padding: 0 10rem;
    width: 60%;
  }
`;

export const FeatureTitle = styled.h2``;

export const FeatureSubTitle = styled.h4`
  margin-top: 1rem;
  font-weight: 300;
`;
