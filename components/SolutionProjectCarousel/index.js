import React from 'react';
import {
  CarouselCard,
  CarouselContainer,
  CardTitle,
  CardContent,
} from './SolutionProjectCarouselStyle';

const projects = [
  {
    title: 'Organisational Objectives',
    description:
      'Our consultants craft customized strategies, efficient project plans, and key performance indicators (KPIs) to drive results. We offer ongoing, hands-on support, fostering collaboration and promptly resolving issues, ensuring your project achieves its objectives.',
  },
  {
    title: 'Risk Management Startegies',
    description:
      'We fortify your project with robust risk management, comprehensive assessments, and contingency plans. Our expertise includes data analytics to optimize performance and ensure your project runs smoothly.',
  },
  {
    title: 'Change management',
    description:
      'we aid in stakeholder readiness, develop transition plans, and facilitate the adoption of new processes. Emphasizing knowledge transfer, we document insights and drive continuous improvement for sustainable project success.',
  },
];

export default function SolutionProjectCarousel() {
  return (
    <CarouselContainer>
      {projects?.map((project, index) => (
        <CarouselCard key={index}>
          <CardTitle>{project?.title}</CardTitle>
          <CardContent>{project?.description}</CardContent>
        </CarouselCard>
      ))}
    </CarouselContainer>
  );
}
