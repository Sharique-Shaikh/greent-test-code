import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PersonPm1 from '../../public/assets/images/PersonPM1.jpg';
import PersonPm2 from '../../public/assets/images/PersonPMM2.jpg';
import PersonPm3 from '../../public/assets/images/PersonPMMM3.jpg';
import PersonPm4 from '../../public/assets/images/PersonPMM4.jpg';
import Image from 'next/image';
import { device } from '@/styles/theme';

const Container = styled.div`
  height: 530px;
  width: 100%;
  background-color: ${(props) => props.theme.DoublePearl};
  border-radius: 2.4rem;
  padding: 2rem 2rem 2rem 2rem;

  @media ${device.mobileM} {
    height: 550px;
  }

  @media ${device.laptop} {
    margin: auto;
    height: 565px;
    width: 20%;
    background-color: ${(props) => props.theme.DoublePearl};
    border-radius: 2.4rem;
    padding: 2rem 2rem 2rem 2rem;
    transition: width 0.3s;

    &:hover {
      width: 30%;
    }

    @media (min-width: 1100px) and (max-width: 1300px) {
      height: 600px;
    }
  }
`;

const Imagee = styled(Image)`
  width: 100%;
  height: 350px;
  background-color: blue;
  margin-right: -2.5px;
  margin-left: -2.5px;
  padding-right: 0px;
  padding-left: 0px;
  object-fit: cover;
  border-radius: 2rem;
  overflow: hidden;
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media${device.mobileM} {
    margin-top: 4rem;
  }

  @media${device.laptop} {
    justify-content: space-between;
    flex-direction: row;
  }
`;

const TitleContainer = styled.div`
  margin-top: 2rem;

  @media ${device.laptop} {
    margin-top: 4rem;
  }

  @media (min-width: 1100px) and (max-width: 1300px) {
    margin-top: 2rem;
  }
`;

const Title = styled.h3`
  font-weigh: 700;
  font-size: 1.8rem;
  line-height: 31.25px;
  color: ${(props) => props.theme.MineShaft};

  @media${device.mobileM} {
    font-size: 2rem;
  }

  @media${device.laptop} {
    font-size: 2.4rem;
  }
`;

const DescContainer = styled.div`
  margin-top: 1.3rem;

  @media ${device.laptop} {
    margin-top: 2rem;
  }

  @media (min-width: 1100px) and (max-width: 1300px) {
    margin-top: 1rem;
  }
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 21.44px;
  color: ${(props) => props.theme.MineShaft};

  @media${device.mobileM} {
    font-size: 1.6rem;
    line-height: 23.44px;
  }

  @media${device.laptop} {
    font-size: 1.8rem;
  }
`;

const ProjectMgmtData = [
  {
    id: 1,
    title: 'Strategy Development',
    description:
      'Understanding your business objectives, customer touchpoints, and CX maturity level to create a tailored program strategy.',
    imgData: PersonPm1,
  },
  {
    id: 2,
    title: 'Platform Implementation',
    description:
      'Selecting and implementing the optimal CRM/CX platform, configuring and integrating systems for seamless information flow',
    imgData: PersonPm2,
  },
  {
    id: 3,
    title: 'User Adoption',
    description:
      'Guiding your team through the transition, providing comprehensive training for user proficiency and effective adoption.',
    imgData: PersonPm3,
  },
  {
    id: 4,
    title: 'Ongoing Optimization',
    description:
      'Offering ongoing support, identifying areas for improvement, and refining your CX strategy with data-driven insights.',
    imgData: PersonPm4,
  },
];

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // Assuming there are 4 images
  //   }, 3000); // 8 seconds

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // Assuming there are 4 images
    }, 3000); // 3 seconds

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Call once to set initial state

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <GalleryContainer>
      {ProjectMgmtData.map((data, index) => (
        <Container
          key={index}
          onMouseEnter={() => handleHover(index)}
          // style={{
          //   width:
          //     (window.innerWidth < 767 && '100%') ||
          //     (index === activeIndex && window.innerWidth > 768
          //       ? '30%'
          //       : '20%'),
          // }}
          style={{
            width: isMobile ? '100%' : index === activeIndex ? '30%' : '20%',
          }}
        >
          <Imagee src={data?.imgData} alt='img' unoptimized />

          <TitleContainer>
            <Title>{data.title}</Title>
          </TitleContainer>

          {index === activeIndex && !isMobile && (
            <DescContainer>
              <Description>{data.description}</Description>
            </DescContainer>
          )}

          {isMobile && (
            <DescContainer>
              <Description>{data.description}</Description>
            </DescContainer>
          )}
        </Container>
      ))}
    </GalleryContainer>
  );
};

export default ImageGallery;
