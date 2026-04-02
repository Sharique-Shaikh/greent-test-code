import Image from 'next/image';
import { Container, Section, SectionTitle } from '../common/CommonStyle';
import {
  ContainerWrapper,
  FeatureData,
  FeatureImage,
  FeatureSubTitle,
  FeatureTitle,
  FeatureWrapper,
} from './CaseStudyStyle';
import Cloud from '../../public/assets/images/cloud.jpeg';
import Server from '../../public/assets/images/server.jpeg';

export default function CaseStudy() {
  return (
    <Section>
      <Container>
        <SectionTitle>Case Studies</SectionTitle>
        <ContainerWrapper>
          <FeatureWrapper>
            <FeatureImage src={Cloud} />

            <FeatureData>
              <FeatureTitle>
                Witness the Remarkable Transformation: Sarah and Mark's Dream
                Kitchen Reality Through Innovative Renovation Financing
              </FeatureTitle>
              <FeatureSubTitle>
                Experience Low Rates, Fixed Terms, and Tailored Funding Options
                That Brought Their Stylish and Functional Kitchen to Life
              </FeatureSubTitle>
            </FeatureData>
          </FeatureWrapper>
        </ContainerWrapper>

        <ContainerWrapper>
          <FeatureWrapper>
            <FeatureImage src={Server} />
            <FeatureData>
              <FeatureTitle>
                Witness the Remarkable Transformation: Sarah and Mark's Dream
                Kitchen Reality Through Innovative Renovation Financing
              </FeatureTitle>
              <FeatureSubTitle>
                Experience Low Rates, Fixed Terms, and Tailored Funding Options
                That Brought Their Stylish and Functional Kitchen to Life
              </FeatureSubTitle>
            </FeatureData>
          </FeatureWrapper>
        </ContainerWrapper>
      </Container>
    </Section>
  );
}
