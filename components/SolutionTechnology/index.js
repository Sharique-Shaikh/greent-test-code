import Image from 'next/image';
import TechnologyCard from '../TechnologyCard';
import { TechCard } from '../TechnologyCard/TechnologyCardStyle';
import TechnologyContact from '../TechnologyContact';
import {
  Container,
  Section,
  SectionDescription,
  SectionTitle,
} from '../common/CommonStyle';
import {
  BottomImageContainer,
  TechnologyWrapper,
  TopImageContainer,
} from './SolutionTechStyle';
import techSideLeft from '../../public/assets/images/techSideLeft.svg';
import techSideRight from '../../public/assets/images/techSideRight.svg';

export default function SolutionTechnology() {
  return (
    <Section>
      <Container>
        <SectionTitle>Technology consulting & services</SectionTitle>
        <SectionDescription>
          Create a technology foundation that's as bold as your vision.
        </SectionDescription>
        <TechnologyWrapper>
          <TopImageContainer>
            <Image src={techSideLeft} alt='tech' />
          </TopImageContainer>
          <TechnologyCard />
          <TechnologyContact />
          <BottomImageContainer>
            <Image src={techSideRight} alt='tech' />
          </BottomImageContainer>
        </TechnologyWrapper>
      </Container>
    </Section>
  );
}
