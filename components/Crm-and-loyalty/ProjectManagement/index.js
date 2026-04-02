import ImageGallery from '../../ImageGallery';
import {
  Container,
  Section,
  SectionTitle,
  SectionDescription,
} from '../../common/CommonStyle';

export default function ProjectManagement() {
  return (
    <Section>
      <Container>
        <SectionTitle>CRM & CX Technology Adoption</SectionTitle>
        <SectionDescription>
          We provide comprehensive solutions to effectively deploy and manage
          Experience Management (XM) technology, including
        </SectionDescription>

        <ImageGallery />
      </Container>
    </Section>
  );
}
