import {
  BlogData,
  BlogSubTitle,
  BlogTitle,
  BlogWrapper,
  BlogsImage,
  ChefsContainer,
  TeamData,
  TeamImage,
  TeamSubTitle,
  TeamTitle,
  TeamWrapper,
} from './TeamStyle';
import {
  Container,
  Section,
  SectionTitle,
  SectionDescription,
} from '../common/CommonStyle';
import { BlogsData } from './BlogsData';
import ProfileCard, { Card } from '../Card';

export default function Team() {
  return (
    <Section>
      <Container>
        <SectionTitle>Our Team</SectionTitle>
        <SectionDescription>
          Our goal is to create a sustainable and collaborative go-to-market
          (GTM) and growth platform for products and businesses, offering a
          strategic cornerstone for their medium to long-term expansion.
        </SectionDescription>

        <TeamWrapper>
          <ProfileCard></ProfileCard>
        </TeamWrapper>
      </Container>
    </Section>
  );
}
