import { Container, Section } from '@/components/common/CommonStyle';
import ContactDetail from './ContactDetail';
import { ContactGrid } from './ContactDetailStyle';
import ContactForm from './ContactForm';

const ContactDetails = () => {
  return (
    <Section>
      <Container>
        <ContactGrid>
          <ContactDetail />
          <ContactForm />
        </ContactGrid>
      </Container>
    </Section>
  );
};

export default ContactDetails;
