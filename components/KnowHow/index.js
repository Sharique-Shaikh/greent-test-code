import Image from 'next/image';
import { Container, Section, SectionTitle } from '../common/CommonStyle';
import {
  ContainerWrapper,
  FeatureData,
  FeatureImage,
  FeatureSubTitle,
  FeatureTitle,
  FeatureWrapper,
} from './KnowHowStyle';
import PartnerLogo from '../../public/assets/images/Instruction.jpeg';
import People from '../../public/assets/images/people.jpeg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function KnowHow() {
  return (
    <Section>
      <Container>
        <SectionTitle>Our Know-How</SectionTitle>

        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
        >
          <ContainerWrapper>
            <FeatureWrapper>
              <FeatureData>
                <FeatureTitle>
                  Research- Expert team reviewing 100+ products every month.
                </FeatureTitle>
                <FeatureSubTitle>
                  Meticulously chosen products from diverse segments.
                </FeatureSubTitle>
              </FeatureData>
              <FeatureImage src={PartnerLogo} alt='research-team' />
            </FeatureWrapper>
          </ContainerWrapper>

          <ContainerWrapper>
            <FeatureWrapper>
              <FeatureData>
                <FeatureTitle>
                  More than 25+ enterprise brands trusted Greentern in their
                  Digital transformation.
                </FeatureTitle>
                <FeatureSubTitle>
                  The Preferred Digital Transformation Partner
                </FeatureSubTitle>
              </FeatureData>
              <FeatureImage src={People} alt='enterprise-brands' />
            </FeatureWrapper>
          </ContainerWrapper>
        </Carousel>
      </Container>
    </Section>
  );
}
