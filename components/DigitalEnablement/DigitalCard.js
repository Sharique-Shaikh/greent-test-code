import {
  Card,
  CardContainer,
  CardSubcontent,
  CardTitle,
} from './DigitalEnablementStyle';
import enterpriseIcon from '@/public/assets/icons/enterpriseIcon.svg';
import uiUxIcon from '@/public/assets/icons/uiUxIcon.svg';
import mobileEngIcon from '@/public/assets/icons/mobileEngIcon.svg';
import webTechIcon from '@/public/assets/icons/webTechIcon.svg';
import dataAnalyticsIcon from '@/public/assets/icons/dataAnalyticIcon.svg';
import qualityAnalysisIcon from '@/public/assets/icons/QAIcon.svg';
import Image from 'next/image';

const cardsData = [
  {
    id: 1,
    title: 'UI & UX Design Thinking',
    image: uiUxIcon,
    subContent: 'Branding , UX strategy,Mobile & web-design',
  },

  {
    id: 2,
    title: 'Mobile Engineering',
    image: mobileEngIcon,
    subContent: 'Android development, IOS development,Hybrid development',
  },
  {
    id: 3,
    title: 'Web Technology Development',
    image: webTechIcon,
    subContent:
      'Custom web Applications, E-commerce Platforms, Content Management systems ',
  },
  {
    id: 4,
    title: 'Enterprise App Development',
    image: enterpriseIcon,
    subContent:
      'Enterprise resource planning, Data & Workflow automation,Business intelligence ',
  },
  {
    id: 5,
    title: 'Quality analysis',
    image: qualityAnalysisIcon,
    subContent: 'Cloud architechture engineering & optimisation',
  },

  {
    id: 6,
    title: 'Data Analytics and AI',
    image: dataAnalyticsIcon,
    subContent:
      ' Uncover valuable insights and make data-driven decisions with our data analytics and artificial intelligence services. We help you harness the potential of your data for a competitive advantage',
  },
];

export default function DigitalCard() {
  return (
    <CardContainer>
      {cardsData?.map((card) => (
        <Card key={card?.id}>
          <Image src={card?.image} alt={card?.title} />
          <CardTitle>{card?.title}</CardTitle>
          <CardSubcontent>{card?.subContent}</CardSubcontent>
        </Card>
      ))}
    </CardContainer>
  );
}
