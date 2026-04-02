import Image from 'next/image';
import { Container, Section, SectionTitle } from '../../common/CommonStyle';
import { GTContainer, GTContent, GTDesc, GTDescTitle } from './WhyGtStyle';
import WhyUs from '../../../public/assets/images/WhyUs.svg';
import Tick from '../../../public/assets/images/Tick.svg';

export default function WhyGt() {
  return (
    <Section>
      <Container>
        <SectionTitle>
          Why choose greentern for your <br /> CRM & Loyalty needs ?
        </SectionTitle>
        <GTContainer>
          <Image src={WhyUs} alt='why-us' />

          <GTContent>
            <p>
              Greentern is a dynamic CRM and consumer loyalty consulting firm
              boasting a youthful and energetic team spread across Southeast
              Asia.
            </p>

            <p style={{ marginTop: '1.5rem' }}>
              Our team possesses extensive experience and subject matter
              expertise, having collaborated with prominent brands throughout
              the region.
            </p>

            <GTDesc>
              <GTDescTitle>
                <Image src={Tick} alt='tick' />
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </GTDescTitle>
              <GTDescTitle>
                <Image src={Tick} alt='tick' />
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </GTDescTitle>
              <GTDescTitle>
                <Image src={Tick} alt='tick' />
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </GTDescTitle>
            </GTDesc>
          </GTContent>
        </GTContainer>
      </Container>
    </Section>
  );
}
