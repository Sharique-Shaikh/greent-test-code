import {
  Section,
  Container,
  SectionTitle,
  SectionDescription,
  CustomCarousel,
  Navigator,
} from '../../common/CommonStyle';
import { LoyaltyWrapper } from './LoyaltyProgramStyle';
import LoyaltyCard from './LoyaltyProgramCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
  LoyaltyCardContainer,
  LpcDescription,
  LpcIcon,
  LpcTitle,
} from './LoyaltyProgramCardStyle';
import Image from 'next/image';
import LPM1 from '../../../public/assets/icons/LPM1.svg';
import LPM2 from '../../../public/assets/icons/LPM2.svg';
import LPM3 from '../../../public/assets/icons/LPM3.svg';
import LPM4 from '../../../public/assets/icons/LPM4.svg';
import webTechIcon from '@/public/assets/icons/webTechIcon.svg';

import { useEffect, useState } from 'react';

import PrevIcon from '../../../public/assets/icons/PrevIcon.svg';
import NextIcon from '../../../public/assets/icons/NextIcon.svg';

const LPCData = [
  {
    id: 1,
    title: 'Discovery',
    subTitle:
      'Our in-depth Discovery Module examines your brand, consumer behavior, market context, and challenges, providing valuable insights that foster a deeper understanding of your customers needs. This comprehensive approach lays a robust foundation for your loyalty program, enabling your brand to establish meaningful connections with your target audience and driving business growth.  ',
    imgData: LPM1,
  },
  {
    id: 2,
    title: 'Define',
    subTitle:
      'Formulate the appropriate strategy ,product ,program and campaign approach we provide guidance on defining all decision points and offer expert recommendations for implementing a successful loyalty program.',
    imgData: LPM2,
  },
  {
    id: 3,
    title: 'Alignment',
    subTitle:
      'Our team is passionate about evangelizing the power of loyalty, CRM, and CX, and we work closely with your key teams to ensure everyone is on board with the program.Thats why we focus on building consensus across all levels, making sure that everyone is on the same page and working towards the same goals.',
    imgData: LPM3,
  },

  {
    id: 4,
    title: 'Phasing & Tech Architecture',
    subTitle:
      'Implementing a gradual organic launch of our loyalty program framework including techstack architechture ,RFP Processes ,& adoption technologies',
    imgData: webTechIcon,
  },

  {
    id: 5,
    title: 'Project delivery',
    subTitle:
      'Comprehensive Implementation plan with an appropriate project and program management strategy',
    imgData: LPM4,
  },
];

export default function LoyaltyProgram() {
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
        <SectionTitle> Loyalty Program Management </SectionTitle>
        <SectionDescription>
          As a marketing leader,are you harnessing the power of innovative
          strategies to fuel business growth, boost revenue, and foster customer
          loyalty? Did you know that 75% of consumers favor companies with
          loyalty programs, and 73% are more likely to recommend them,
          presenting a significant opportunity to drive growth through customer
          engagement and retention?
        </SectionDescription>

        <LoyaltyWrapper>
          <CustomCarousel
            autoPlay={false}
            showIndicators={true}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            centerMode
            swipeScrollTolerance={isMobile ? 10 : 100}
            centerSlidePercentage={isMobile ? 100 : 30}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              // Ensure proper grouping of the condition

              if (index === 0 || index === 3) {
                return (
                  <Navigator onClick={onClickHandler}>
                    {index === 0 && <Image src={PrevIcon} alt='prev-icon' />}

                    {index === 3 && <Image src={NextIcon} alt='next-icon' />}
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
