import {
  GlobalWrapper,
  Section,
  Container,
  Title,
} from '../../../components/common/CommonStyle';
import { ContactUsContainer } from './ContactUsStyle';

const AboutUsBanner = () => {
  return (
    <GlobalWrapper>
      <Section>
        <Container>
          <ContactUsContainer>
            <Title>Our Team</Title>
            <h4>
              With a cumulative experience exceeding 50 years in driving demand,
              fostering growth, and facilitating expansion for numerous product
              companies, we identified the challenges associated
            </h4>

            <h4>with new market entry and its ecosystem.</h4>
            <h4>
              Our aim is to establish a sustainable and collaborative
              Go-to-Market (GTM) and Growth platform for products, providing a
              strategic foundation for their medium to long-term expansion
            </h4>
          </ContactUsContainer>
        </Container>
      </Section>
    </GlobalWrapper>
  );
};

export default AboutUsBanner;
