import { device } from '@/styles/theme';
import { styled } from 'styled-components';

export const BusinessWrapper = styled.div`
  background-color: #eff7f1;
  background-image: url('/assets/images/businessstoryBg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem 1rem;
`;

export const CardImg = styled.div`
      aspect-ratio: 205/104;
    width: 100%;
    padding: 50px 70px;
    border: 1px solid #87c198;
    border-radius: 14px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }
`;

export const CardWrapper = styled.div`
  min-height: 350px;
  width: 100%;
  border-radius: 2.4rem;
  padding: 1rem;
  background-color: #fff;
  margin-right: 2rem;
  cursor: pointer;

  &:hover {
    border: 1px solid #007f62;
    transition: 1s;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-10px);
  }

  img {
    width: 100%;
  }
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
    font-weight: 700;
    font-size: 2.4rem;
    color: ${(props) => props.theme.MineShaft};
    line-height: 30px;
  }
`;

export const ProfileSubDescription = styled.div`
  margin: 2.5rem 0;

  p {
    font-weight: 400;
    font-size: 1.8rem;
    color: ${(props) => props.theme.FairGray};
    line-height: 24px;
  }
`;

export const ProfileIcons = styled.div`
  display: flex;
  gap: 2rem;
`;

export const BusinessDescription = styled.div`
  p {
    font-weight: 700;
    text-align: center;
    font-size: 3.2rem;
    line-height: 40px;
    color: ${(props) => props.theme.MineShaft};
  }
`;

export const ConnectDetail = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
`;
