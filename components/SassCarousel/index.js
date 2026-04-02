import React from 'react';
import {
  CarouselCard,
  CarouselContainer,
  CardTitle,
  CardContent,
  CarouselTitle,
} from './SassCarouselStyle';
import retailImage from '../../public/assets/images/BgImg1.png';
import buildingImage from '../../public/assets/images/BgImg2.png';

const projects = [
  {
    title: 'Retail & E-commerce',
    description:
      'Improve omnichannel experiences and introduce new business models',
    backgroundImage: retailImage,
  },
  {
    title: 'FMCG',
    description: 'Transform sector challenges to a digital advantage ',
  },
  {
    title: 'Real Estate',
    description:
      'Experience emerging technologies to create value- based digital transformation',
    backgroundImage: buildingImage,
  },
  {
    title: 'Banking & Finance',
    description:
      'Create greater customer experience shifts through superior products',
  },
  // {
  //   title: 'Retail & E-commerce',
  //   description:
  //     'Improve omnichannel experiences and introduce new business models',
  //   backgroundImage: retailImage,
  // },
  // {
  //   title: 'FMCG',
  //   description: 'Transform sector challenges to a digital advantage ',
  // },
  // {
  //   title: 'Real Estate',
  //   description:
  //     'Experience emerging technologies to create value- based digital transformation',
  //   backgroundImage: buildingImage,
  // },
  // {
  //   title: 'Banking & Finance',
  //   description:
  //     'Create greater customer experience shifts through superior products',
  // },
];

export default function SassCarousel() {
  return (
    <>
      <CarouselTitle>
        Our core focus lies in the following key industries
      </CarouselTitle>
      <CarouselContainer>
        {projects?.map((project, index) => (
          <CarouselCard
            key={index}
            backgroundImage={project?.backgroundImage?.src || ''}
          >
            <CardTitle hasBackground={!!project.backgroundImage}>
              {project?.title}
            </CardTitle>
            <CardContent hasBackground={!!project.backgroundImage}>
              {project?.description}
            </CardContent>
          </CarouselCard>
        ))}
      </CarouselContainer>
    </>
  );
}
