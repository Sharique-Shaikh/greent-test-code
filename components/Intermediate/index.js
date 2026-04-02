import { Container } from '../common/CommonStyle';
import {
  ContactButton,
  ContactImage,
  ContactTitle,
  ContactWrapper,
  Divider,
  IntermediateWrapper,
  Wrapper,
} from './IntermediateStyle';
import ContactIcon1 from '../../public/assets/icons/contact-icon.svg';
import ContactIcon2 from '../../public/assets/icons/contact-icon2.svg';

export default function Intermediate() {
  return (
    <Wrapper>
      <Container>
        <IntermediateWrapper>
          <ContactWrapper>
            <ContactImage src={ContactIcon1} alt='contact-icon-1' />
            <ContactTitle>
              Are you seeking
              <br />
              a business solution? <br />
              Explore how we can help
            </ContactTitle>
            <ContactButton>Contact Us</ContactButton>
          </ContactWrapper>
          <Divider />
          <ContactWrapper>
            <ContactImage src={ContactIcon2} alt='contact-icon-1' />
            <ContactTitle>
              Do you have a
              <br />
              great product?
              <br />
              Let us hear about it.
            </ContactTitle>
            <ContactButton>Contact Us</ContactButton>
          </ContactWrapper>
        </IntermediateWrapper>
      </Container>
    </Wrapper>
  );
}
