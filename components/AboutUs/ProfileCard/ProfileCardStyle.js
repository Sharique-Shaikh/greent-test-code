import styled from 'styled-components';
import { device } from '../../../styles/theme';
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
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
  @media ${device.laptopS} {
    grid-template-columns: repeat(4, 1fr);
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
  height: auto;
`;

export const BlogData = styled.div`
  padding: 1rem;
`;

export const ChefName = styled.p`
  margin-top: 1rem;
  font-weight: 600;
`;

export const ProfileSocialWrapper = styled.div`
  background-color: #f0f5f0;
  width: 100%;
  height: 60%;

  display: ${(props) => (props.show ? 'flex' : 'none')};

  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  transition: 1s ease;

  pointer-events: ${(props) => (props.show ? 'auto' : 'none')};
`;

export const BlogsImage = styled(Image)`
  height: 50%;
  width: 100%;
  border-radius: 0.8rem;
  cursor: pointer;

  display: ${(props) => (props.show ? 'none' : 'block')};

  @media ${device.laptop} {
    width: 100%;
    height: 60%;
  }

  // &:hover + ${ProfileSocialWrapper} {
  //   display: flex;
  // }
`;

export const BlogTitle = styled.h2`
  color: ${(props) => props.theme.MikadoGreen};
  font-weight: 400;
  text-align: left;
  margin: 0.3rem 0;
`;

export const BlogSubTitle = styled.p`
  font-weight: 300;
  text-align: left;
  margin: 0.3rem 0;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d6e0da;
  margin-top: 16px;
  margin-bottom: 12px;
`;

export const ProfileDesc = styled.p`
  font-size: 1.6rem;
  color: #333;
`;

export const FooterIcon = styled.div`
  font-size: 2rem;
  cursor: pointer;
  color: #000;

  &:hover {
    color: ${(props) => props.theme.MikadoGreen};
  }
`;
