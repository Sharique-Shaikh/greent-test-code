import PrimaryButton from '../../PrimaryButton';
import {
  Container,
  Section,
  SectionTitle,
  SectionDescription,
} from '../../common/CommonStyle';
import {
  BusinessSolutionWrapper,
  BusinessSectionTitle,
  BusinessSectionDescription,
  BusinessBtn,
  LocateContainer,
  LocationCarouselWrapper,
  BusinessContact,
  ContactContainer,
  ContactInfo,
  ContactNo,
  ContactInfoWrapper,
  Breaker,
} from './BusinessSolutionStyle';
// import Phone from '../../../public/assets/icons/phone-icon.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Mail from '../../../public/assets/icons/mail-icon.svg';
import Phone from '../../../public/assets/icons/phone-icon.svg';
import Link from 'next/link';

export default function BusinessSolutions() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial call to set button width
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup by removing event listener
    };
  }, []);

  return (
    <BusinessSolutionWrapper>
      <Section>
        <Container>
          <BusinessSectionTitle>
            Unlock your customer relationships with
          </BusinessSectionTitle>
          <BusinessSectionTitle>
            Our CRM and loyalty consulting!
          </BusinessSectionTitle>

          <ContactInfoWrapper>
            <ContactContainer>
              <ContactInfo>
                <p>Contact us:</p>
                <ContactNo>
                  <Image src={Phone} alt='phone' />
                  <a> +65 9050 2059 </a>
                </ContactNo>
              </ContactInfo>
            </ContactContainer>

            <Breaker> | </Breaker>

            <ContactContainer>
              <ContactInfo>
                <ContactNo>
                  <Image src={Mail} alt='mail' />
                  <a href='mailto:sales@thegreentern.com'>
                    sales@thegreentern.com
                  </a>
                </ContactNo>
              </ContactInfo>
            </ContactContainer>
          </ContactInfoWrapper>

          <Link href={'/contact-us'}>
            <BusinessBtn>
              <PrimaryButton
                btnTitle={'Consult us now'}
                btnWidth={isMobile ? '60%' : '20%'}
                textalign={'left'}
                bgColor={'#fff'}
                color={'#007F62'}
              />
            </BusinessBtn>
          </Link>
        </Container>
      </Section>
    </BusinessSolutionWrapper>
  );
}
