import Image from 'next/image';
import { Container, Section, SectionTitle } from '../common/CommonStyle';
import {
  AboutUsGrid,
  AboutUsWrapper,
  ContentHead,
  ContentWrapper,
  ImageWrapper,
  SubContent,
} from './AboutUsCompStyle';
import aboutUs from '@/public/assets/images/aboutUsBanner.svg';

export default function AboutUsComp() {
  return (
    <Section>
      <Container>
        <AboutUsWrapper>
          <SectionTitle>Our Story</SectionTitle>
          <AboutUsGrid>
            <ImageWrapper>
              <Image src={aboutUs} alt='aboutUs' loading='lazy' />
            </ImageWrapper>
            <ContentWrapper>
              <ContentHead>
                Enabling Growth and Efficiency with Technology & AI
              </ContentHead>
              <SubContent>
                Our mission is to ensure right technology solutions are adopted
                for modern businesses. With a unique comprehensive full stack
                solutioning approach to business requirements and problems, we
                aim to revolutionize the way Technology solutions are evaluated
                and implemented. Successfully able to help 100+ leading
                enterprise brands across 7 countries in their digital
                transformation & growth.
              </SubContent>
            </ContentWrapper>
          </AboutUsGrid>
        </AboutUsWrapper>
      </Container>
    </Section>
  );
}
