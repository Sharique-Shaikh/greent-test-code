import Image from 'next/image';
import { Container, Section, SectionTitle } from '../../common/CommonStyle';
import {
  ContainerWrapper,
  FeatureData,
  FeatureDiv,
  FeatureImage,
  FeatureSubGrid,
  FeatureSubTitle,
  FeatureTitle,
  FeatureWrapper,
  ImageWrapper,
} from './AboutUsStyle';

import PartnerLogo from '../../../public/assets/images/Instruction.jpeg';
import Check from '../../../public/assets/images/check.svg';

export default function AboutUs() {
  return (
    <Section>
      <Container>
        <SectionTitle>About Us</SectionTitle>
        <ContainerWrapper>
          <FeatureWrapper>
            <FeatureImage src={PartnerLogo} />

            <FeatureData>
              <FeatureTitle>
                Greentern is a dynamic CRM and consumer loyalty consulting firm
                boasting a youthful and energetic team spread across Southeast
                Asia.
              </FeatureTitle>

              <FeatureTitle>
                Our team possesses extensive experience and subject matter
                expertise, having collaborated with prominent brands throughout
                the region.
              </FeatureTitle>

              <FeatureSubGrid>
                <FeatureDiv>
                  <ImageWrapper>
                    <Image src={Check} alt='check' />
                  </ImageWrapper>
                  <p>200+ solutions</p>
                </FeatureDiv>

                <FeatureDiv>
                  <ImageWrapper>
                    <Image src={Check} alt='check' />
                  </ImageWrapper>
                  <p>7 Countries</p>
                </FeatureDiv>

                <FeatureDiv>
                  <ImageWrapper>
                    <Image src={Check} alt='check' />
                  </ImageWrapper>
                  <p>40+ years of experience</p>
                </FeatureDiv>

                <FeatureDiv>
                  <ImageWrapper>
                    <Image src={Check} alt='check' />
                  </ImageWrapper>
                  <p>100+ projects delivered</p>
                </FeatureDiv>
              </FeatureSubGrid>
            </FeatureData>
          </FeatureWrapper>
        </ContainerWrapper>
      </Container>
    </Section>
  );
}
