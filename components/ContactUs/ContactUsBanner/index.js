import {
  GlobalWrapper,
  Section,
  Container,
  Title,
} from '../../../components/common/CommonStyle';
import { ContactUsContainer } from './ContactUsStyle';

const ContactUsBanner = () => {
  return (
    <GlobalWrapper>
      <Section>
        <Container>
          <ContactUsContainer>
            <Title>We’d love to hear from you</Title>
            <h2>
              Curious about what we do or need some assistance? Don’t hesitate
              to contact us, we love a good chat!
            </h2>
          </ContactUsContainer>
        </Container>
      </Section>
    </GlobalWrapper>
  );
};

export default ContactUsBanner;
