import Accordion from '../Accordion';
import {
  Container,
  Section,
  SectionDescription,
  SectionTitle,
} from '../common/CommonStyle';
import {
  AccordionColumn,
  CardContainer,
  DigitalCardContainer,
  GridContainer,
  ImageColumn,
  LineBreak,
} from './DigitalEnablementStyle';
import Image from 'next/image';
import digitalWrap from '@/public/assets/images/digitalWrap.svg';
import DigitalCard from './DigitalCard';

export default function DigitalEnablement() {
  const accordionItems = [
    {
      title: 'Technology Strategy Consulting',
      content:
        'Our experts assist businesses in making strategic technology decisions, assessing buy versus build options for a robust infrastructure, including cloud, data analytics, and cybersecurity. With experience spanning over 50+ brands, we help organizations make informed choices that propel success.',
    },
    {
      title: 'Process Transformation',
      content:
        'Our Process Transformation expertise helps businesses streamline and automate operations, leveraging digital tools and workflows to boost efficiency, accuracy, and productivity. We analyze, optimize, and implement digital solutions to ensure a seamless transition, enabling businesses to achieve operational excellence, improve customer satisfaction, and drive innovation.',
    },
    {
      title: 'Data-Driven Insights',
      content:
        'We empower businesses with Data-Driven Insights, unlocking the power of data to inform strategic decisions. Our expertise ensures effective data collection, analysis, and utilization, providing actionable intelligence that drives business growth and improvement.',
    },
    {
      title: 'Customer-Centric Experience',
      content:
        'We craft exceptional Customer-Centric Experiences, designing and delivering personalized, seamless interactions across all touchpoints. Our expertise ensures a unified, omnichannel experience that puts customers at the heart of every business decision.',
    },
  ];
  return (
    <Section>
      <Container>
        <SectionTitle>Pillars of Digital Enablement</SectionTitle>
        <SectionDescription>
          <LineBreak>
            Serving a diverse clientele, from global brands to startups we drive
            lasting digital
          </LineBreak>
          <LineBreak>
            advancements in today's transformative landscape.
          </LineBreak>
        </SectionDescription>
        <GridContainer>
          <ImageColumn>
            <Image src={digitalWrap} alt='digital' width={440} height={400} />
          </ImageColumn>
          <AccordionColumn>
            <Accordion items={accordionItems} />
          </AccordionColumn>
        </GridContainer>
        <DigitalCard />
      </Container>
    </Section>
  );
}
