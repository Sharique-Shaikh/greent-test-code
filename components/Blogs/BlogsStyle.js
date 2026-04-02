import styled from 'styled-components';
import { device } from '../../styles/theme';
import Image from 'next/image';

export const ChefsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
  }

  @media ${device.laptopS} {
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }
`;

export const SectionTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.TitleColor};
  text-align: center;
`;

export const BlogWrapper = styled.div`
  box-shadow: 0 2px 6px hsla(45, 100%, 15%, 0.15);
  height: auto;
`;

export const BlogData = styled.div`
  padding: 1.8rem;
`;

export const ChefName = styled.p`
  margin-top: 1rem;
  font-weight: 600;
`;

export const BlogsImage = styled(Image)`
  height: 50%;
  width: 100%;

  @media ${device.laptop} {
    width: 100%;
    height: 50%;
  }
`;

export const BlogTitle = styled.h2`
  color: ${(props) => props.theme.MikadoGreen};
  font-weight: 400;
  text-align: left;
  margin: 1.5rem 0;
`;

export const BlogSubTitle = styled.p`
  font-weight: 300;
  text-align: left;
  margin: 1.5rem 0 3rem 0;
`;
