import PrimaryButton from '../PrimaryButton';
import {
  Container,
  Section,
  SectionTitle,
  SectionDescription,
  CustomCarousel,
} from '../common/CommonStyle';
import {
  BusinessSolutionWrapper,
  BusinessSectionTitle,
  BusinessSectionDescription,
  BusinessBtn,
  LocateContainer,
  LocationCarouselWrapper,
  Navigator,
} from './BusinessSolutionStyle';
import LocationCard from '../LocationCard';
import { Carousel } from 'react-responsive-carousel';
import CenteredTextWithLine from '../CenteredTextWithLine';
import CustomerCard from '../CustomerCard';
import TestCard from '../CustomerCard/TestCard';
import { useEffect, useState } from 'react';
import {
  Breaker,
  ContactContainer,
  ContactInfo,
  ContactInfoWrapper,
  ContactNo,
} from '../Crm-and-loyalty/BusinessSolutions/BusinessSolutionStyle';

import Mail from '../../public/assets/icons/mail-icon.svg';
import Phone from '../../public/assets/icons/phone-icon.svg';
import PrevIcon from '../../public/assets/icons/PrevIcon.svg';
import NextIcon from '../../public/assets/icons/NextIcon.svg';

import Image from 'next/image';

import Phillippines from '../../public/assets/images/philipinesFlag.svg';
import Singapore from '../../public/assets/images/singaporeFlag.svg';
import India from '../../public/assets/images/indianFlag.svg';
import Malaysia from '../../public/assets/images/malaysiaFlag.svg';
import Indonesia from '../../public/assets/images/indonesiaFlag.svg';
import Link from 'next/link';

const locationData = [
  // {
  //   id: 1,
  //   location: 'Phillippines',
  //   flag: Phillippines,
  //   address1: '1 Raffles Boulevard, 2nd street, ',
  //   address2: 'singapore central',
  // },
  {
    id: 2,
    location: 'Singapore',
    flag: Singapore,
    address1: 'A3, Shenton Wy, #19-02,',
    address2: 'Shenton House, ',
    address3: 'Singapore 068805',
  },
  {
    id: 3,
    location: 'India',
    flag: India,
    address1: 'Bizzhub (Aspire), 1st floor Sony ',
    address2: 'World Signal, 100 Feet Rd, ',
    address3: 'Koramangala, Bengaluru,',
    landMark: ' Karnataka - 560095',
  },

  {
    id: 4,
    location: 'Malaysia',
    flag: Malaysia,
    address1: 'B135, Megan Avenue II, 12,',
    address2: ' Jalan Yap Kwan Seng, ',
    address3: '50450 Kuala Lumpur W.P.',
    landMark: 'Kuala Lumpur Malaysia',
  },

  {
    id: 5,
    location: 'Indonesia',
    flag: Indonesia,
    address1: 'Aldeoz Building 6th Floor – Jl.   ',
    address2: 'Warung',
    address3: 'Jati Barat No.39, Kalibata,',
    landMark: 'Pancoran, Jakarta Selatan',
  },
];

export default function BusinessSolutions() {
  const [isMobile, setIsMobile] = useState(false);

  // Check viewport width to determine if it's a mobile device
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    // Call handleResize once on component mount to set initial state
    handleResize();
    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BusinessSolutionWrapper>
      <Section>
        <Container>
          <BusinessSectionTitle>
            Collaborate. Innovate. Excel
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

          <Link href={'/contact-us'}>
            <BusinessBtn>
              <PrimaryButton
                btnTitle={'Get in touch'}
                btnWidth={isMobile ? '50%' : '20%'}
                textalign={'left'}
              />
            </BusinessBtn>
          </Link>
          <LocateContainer>
            <CenteredTextWithLine>Locate us</CenteredTextWithLine>
          </LocateContainer>
        </Container>
      </Section>
      {/*  */}
      <LocationCarouselWrapper>
        <CustomCarousel
          autoPlay={false}
          showIndicators={true}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          swipeable={true}
          bgColor='#fff'
          // infiniteLoop
          // preventMovementUntilSwipeScrollTolerance={true}
          centerMode
          swipeScrollTolerance={isMobile ? 10 : 30}
          centerSlidePercentage={isMobile ? 100 : 30}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            console.log(index, 'idcheck22');
            // Ensure proper grouping of the condition
            if (index === 0 || index === 2) {
              return (
                <Navigator onClick={onClickHandler}>
                  {index === 0 && <Image src={PrevIcon} alt='prev-icon' />}

                  {index === 2 && <Image src={NextIcon} alt='next-icon' />}
                </Navigator>
              );
            }

            // Return null if the condition is not met
            return null;
          }}
        >
          {locationData?.map((data) => {
            return (
              <LocationCard
                country={data?.location}
                address1={data?.address1}
                address2={data?.address2}
                address3={data?.address3}
                landMark={data?.landMark}
                flag={data?.flag}
              />
            );
          })}
        </CustomCarousel>
      </LocationCarouselWrapper>
    </BusinessSolutionWrapper>
  );
}
