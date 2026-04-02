import {
  BusinessSolutionWrapper,
  BusinessSectionTitle,
  BusinessBtn,
  ContactContainer,
  ContactInfo,
  ContactNo,
  ContactInfoWrapper,
  Breaker,
} from './ProductSalesStyles';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Mail from '@/public/assets/icons/mail-icon.svg';
import Phone from '@/public/assets/icons/phone-icon.svg';
import PrimaryButton from '../PrimaryButton';
import { Container, Section } from '../common/CommonStyle';
import Link from 'next/link';
import ScheduleBtn from '../PrimaryButton/ScheduleButton';

export default function ProductSales() {
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
            Unlock new revenue streams
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
              <ScheduleBtn
                btnTitle={'Schedule a consultation call'}
                btnWidth={isMobile ? '75%' : '25%'}
                textalign={'left'}
                bgColor={'#fff'}
                color={'#007F62'}
                bgHover={true}
              />
            </BusinessBtn>
          </Link>
        </Container>
      </Section>
    </BusinessSolutionWrapper>
  );
}
