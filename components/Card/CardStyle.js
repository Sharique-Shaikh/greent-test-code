import { device } from '@/styles/theme';
import { styled } from 'styled-components';
import Image from 'next/image';

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptopS} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;
export const CardWrapper = styled.div`
  min-height: 450px;
  width: 350px;
  border-radius: 2.4rem;
  padding: 1rem;
  background-color: #fff;

  img {
    overflow: hidden;
  }

  @media ${device.laptopL} {
    width: 500px;
  }
`;

export const PersonImage = styled(Image)`
  @media ${device.laptopL} {
    width: 100%;
  }

  border-radius: 16px;
`;

export const ProfileDetail = styled.div`
  margin: 1rem 1.4rem;
`;

export const ProfileContainer = styled.div`
  display: flex;
`;

export const ProfileName = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${(props) => props.theme.MineShaft};
`;

export const ProfileDesignation = styled.h5`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${(props) => props.theme.MineShaft};
`;

export const FlagImage = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
`;

export const ProfileDescription = styled.div`
  margin: 2.5rem 0;
  p {
    font-weight: 400;
    font-size: 1.5rem;
    color: ${(props) => props.theme.FairGray};
    line-height: 24px;

    @media ${device.laptop} {
      font-size: 1.8rem;
    }
  }
`;

export const ProfileIcons = styled.div`
  display: flex;
  gap: 2rem;
`;
