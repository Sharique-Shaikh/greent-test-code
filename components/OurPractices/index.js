import {
  Container,
  Section,
  SectionDescription,
  SectionTitle,
} from '../common/CommonStyle';
import PracticeTab from './PracticeTab';
import { GreenTernWrapper } from './PracticeTabStyle';

export default function OurPractices() {
  return (
    <Section>
      <Container>
        <SectionTitle>Why Greentern?</SectionTitle>
        <SectionDescription>
          We're your one-stop solution for technology adoption and digital
          transformation, offering expert advice and delivery of innovative
          solutions.
        </SectionDescription>
        <PracticeTab />
      </Container>
    </Section>
  );
}
