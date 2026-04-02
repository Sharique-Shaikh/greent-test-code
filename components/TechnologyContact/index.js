import {
  BusinessSolutionWrapper,
  BusinessSectionTitle,
  BusinessBtn,
  ContactContainer,
  ContactInfo,
  ContactNo,
  ContactInfoWrapper,
  Breaker,
} from './TechContactStyle';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Mail from '@/public/assets/icons/mail-icon.svg';
import Phone from '@/public/assets/icons/phone-icon.svg';
import PrimaryButton from '../PrimaryButton';
import { Container, Section } from '../common/CommonStyle';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TechnologyContact() {
  const router = useRouter();
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
            Elevate your business and connect with your best customers
          </BusinessSectionTitle>
          <ContactInfoWrapper>
            <ContactContainer>
              <ContactInfo>
                <p>Contact us:</p>
                <ContactNo>
                  <Image src={Phone} alt='phone' />
                  <a>+65 9050 2059</a>
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

          <BusinessBtn>
            <PrimaryButton
              btnTitle={`Let's catchup`}
              btnWidth={isMobile ? '60%' : '20%'}
              textalign={'left'}
              bgColor={'#fff'}
              color={'#007F62'}
              onClick={() => router.push('/contact-us')}
            />
          </BusinessBtn>
        </Container>
      </Section>
    </BusinessSolutionWrapper>
  );
}
