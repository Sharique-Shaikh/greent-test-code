import {
  Container,
  Section,
  SectionTitle,
  SectionDescription,
} from '../common/CommonStyle';
import { BusinessWrapper } from './BusinessStoryStyle';
import BusinessCard from './BusinessCard';

export default function BusinessStory() {
  return (
    <Section>
      <Container>
        <SectionTitle>Our business stories </SectionTitle>
        <SectionDescription>
          From early stage startups to renowned brands, we have plenty of
          stories to share
        </SectionDescription>
        <BusinessWrapper>
          <BusinessCard />
        </BusinessWrapper>
      </Container>
    </Section>
  );
}
