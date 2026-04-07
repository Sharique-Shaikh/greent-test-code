import {
  Container,
  Section,
  SectionTitle,
  SectionDescription,
} from '../common/CommonStyle';
import {
  StatisticsArea,
  StatisticsContainer,
  StatisticsContent,
  StatisticsCount,
  StatisticsData,
  StatisticsTitle,
  StatisticsWrapper,
} from './StatisticsStyle';

import GTMap from '../../public/assets/images/Map.svg';

import Map from '../../public/assets/images/network-4.svg';
import Countries from '../../public/assets/images/network-1.svg';
import Network from '../../public/assets/images/network-3.svg';
import Tech from '../../public/assets/images/network-2.svg';
import Solution from '../../public/assets/images/network-4.svg';

import Image from 'next/image';

export default function Statistics() {
  return (
    <Section>
      <Container>
        <SectionTitle>Our Business Network</SectionTitle>
        <SectionDescription>
          Working across disciplines, we deliver solutions that resonate across{' '}
          <br />
          different geographies
        </SectionDescription>

        <StatisticsContainer>
          <StatisticsContent>
            <StatisticsWrapper>
              <div>
                <Image src={Countries} alt='countries' />
              </div>
              <StatisticsData>
                <StatisticsCount>5+</StatisticsCount>
                <StatisticsTitle>Countries</StatisticsTitle>
              </StatisticsData>
            </StatisticsWrapper>

            <StatisticsWrapper>
              <div>
                <Image src={Network} alt='countries' />
              </div>
              <StatisticsData>
                <StatisticsCount>100+</StatisticsCount>
                <StatisticsTitle>Network of Tech Buyers</StatisticsTitle>
              </StatisticsData>
            </StatisticsWrapper>

            <StatisticsWrapper>
              <div>
                <Image src={Tech} alt='countries' />
              </div>
              <StatisticsData>
                <StatisticsCount>50+</StatisticsCount>
                <StatisticsTitle>Years of Tech Experience</StatisticsTitle>
              </StatisticsData>
            </StatisticsWrapper>

            <StatisticsWrapper>
              <div>
                <Image src={Solution} alt='countries' />
              </div>
              <StatisticsData>
                <StatisticsCount>120+</StatisticsCount>
                <StatisticsTitle>Solutions Provided</StatisticsTitle>
              </StatisticsData>
            </StatisticsWrapper>
          </StatisticsContent>
          <StatisticsArea>
            <Image src={GTMap} alt='map' />
          </StatisticsArea>
        </StatisticsContainer>
      </Container>
    </Section>
  );
}
