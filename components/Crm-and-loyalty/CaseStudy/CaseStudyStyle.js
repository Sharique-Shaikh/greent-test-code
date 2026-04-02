import { device } from '@/styles/theme';
import Image from 'next/image';
import { styled } from 'styled-components';

export const ContainerWrapper = styled.div`
  height: 35rem;
  width: 100%;
  margin-top: 2rem;
  border-radius: 0.8rem;
  overflow: hidden;
  border: 1px solid rgba(51, 51, 51, 0.1);
`;

export const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f0f5f0;
  @media (${device.laptop}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FeatureImage = styled(Image)`
  height: 50%;
  width: 100%;

  @media (${device.laptop}) {
    width: 50%;
    height: 100%;
  }
`;

export const FeatureData = styled.div`
  padding: 1rem 1rem 1.5rem;

  @media (${device.laptop}) {
    padding: 0 2.5rem;
  }
`;

export const FeatureTitle = styled.h2`
  color: ${(props) => props.theme.MikadoGreen};
  font-weight: 400;
`;

export const FeatureSubTitle = styled.h4`
  margin-top: 1rem;
  font-weight: 200;
`;
