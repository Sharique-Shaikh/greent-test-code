import {
  Section,
  Container,
  SectionTitle,
  SectionDescription,
  CustomCarousel,
} from '../../../components/common/CommonStyle';
import { LoyaltyWrapper } from './LoyaltyStyle';
import LoyaltyCard from './LoyaltyCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
  LoyaltyCardContainer,
  LpcDescription,
  LpcIcon,
  LpcTitle,
} from './LoyaltyCardStyle';
import Image from 'next/image';
import LPC1 from '../../../public/assets/icons/LPC1New.svg';
import LPC2 from '../../../public/assets/icons/LPC2New.svg';
import LPC3 from '../../../public/assets/icons/LPC3New.svg';
import LPC4 from '../../../public/assets/icons/LPC4New.svg';
import { useEffect, useState } from 'react';
import PrevIcon from '../../../public/assets/icons/PrevIcon.svg';
import NextIcon from '../../../public/assets/icons/NextIcon.svg';
import { Navigator } from '../../../components/common/CommonStyle';

const LPCData = [
  {
    id: 1,
    title: 'Founding Team',
    subTitle:
      'Our team have launched 100+ loyalty programs across SEA and India, demonstrating expertise in loyalty program design and implementation.',
    imgData: LPC1,
  },
  {
    id: 2,
    title: 'Brand Expertise',
    subTitle:
      'Experience working with brands across Southeast Asia, including Singapore, Malaysia, Indonesia, Thailand, Vietnam, Myanmar, and the Philippines.',
    imgData: LPC2,
  },
  {
    id: 3,
    title: 'Technology Agnostic',
    subTitle:
      'We are experts across all CRM, Loyalty, Customer Experience technologies in the market',
    imgData: LPC3,
  },
  {
    id: 4,
    title: 'Frameworks',
    subTitle:
      'We work with a practical framework of launching and implementing programs',
    imgData: LPC4,
  },
];

export default function Loyalty() {
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
    <Section>
      <Container>
        <SectionTitle> Loyalty & CRM Consulting</SectionTitle>
        <SectionDescription>
          Our vibrant CRM & Loyalty Consulting team, covering Southeast Asia,
          brings extensive experience and expertise, with a strong track record
          of success. We've partnered with leading brands, delivering over 200
          solutions across 7 countries, and 100+ successful projects. Leveraging
          our experience and proprietary frameworks, we craft tailored programs
          for seamless deployment and results-driven success.
        </SectionDescription>

        <LoyaltyWrapper>
          <CustomCarousel
            autoPlay={false}
            showIndicators={true}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            // infiniteLoop
            // preventMovementUntilSwipeScrollTolerance={true}
            centerMode
            swipeScrollTolerance={isMobile ? 10 : 100}
            centerSlidePercentage={isMobile ? 100 : 30}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
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
            {LPCData.map((data) => (
              <LoyaltyCard data={data} />
            ))}
          </CustomCarousel>
        </LoyaltyWrapper>
      </Container>
    </Section>
  );
}
