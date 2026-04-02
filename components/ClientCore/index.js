import Image from 'next/image';
import {
  Container,
  CustomCarousel,
  Line,
  Navigator,
  Section,
  SectionDescription,
  SectionTitle,
} from '../common/CommonStyle';
import {
  TopImageContainer,
  BottomImageContainer,
  CoreWrapper,
} from './ClientCoreStyle';
import coreTopImage from '../../public/assets/images/coreTopImage.svg';
import coreBottomImage from '../../public/assets/images/coreBottomImage.svg';
import ClientCoreCard from '../ClientCoreCard';
import passionImg from '../../public/assets/images/passionImg.svg';
import collaborationImg from '../../public/assets/images/collaborationImg.svg';
import smartWorkImg from '../../public/assets/images/smartWorkImg.svg';
import continuouslyImg from '../../public/assets/images/continuouslyImg.svg';
import { useEffect, useState } from 'react';
import PrevIcon from '../../public/assets/icons/PrevIcon.svg';
import NextIcon from '../../public/assets/icons/NextIcon.svg';

const cardDetails = [
  {
    title: 'Passion & Pride',
    content:
      'We engage in what fuels our passion. We are dedicated to empowering our clients to thrive, and we find fulfillment in the results we deliver',
    imgData: passionImg,
  },
  {
    title: 'Collaboration',
    content:
      'We stand by, motivate, and encourage each other. Success for us is a collective effort; we understand that we thrive together, not in isolation',
    imgData: collaborationImg,
  },
  {
    title: 'Smart work',
    content:
      'We prioritize working intelligently, seeking innovative and efficient solutions rather than relying on outdated or standardized approaches',
    imgData: smartWorkImg,
  },
  {
    title: 'Continuously evolving',
    content:
      'Our dedication lies in nurturing individual growth and advancement. We strive to empower both our team members and clients to achieve their utmost potential.',
    imgData: continuouslyImg,
  },
];

export default function ClientCore() {
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
        <SectionTitle>Our core values & ethics</SectionTitle>
        <SectionDescription>
          <Line>
            Each day, in both challenges and successes, we uphold and embody our
            four core values.
          </Line>
          These values are our steadfast principles, guiding our team's actions
          and dedication to our clients.
        </SectionDescription>
        <CoreWrapper>
          <TopImageContainer>
            <Image src={coreTopImage} alt='' />
          </TopImageContainer>
          <CustomCarousel
            autoPlay={false}
            showIndicators={true}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            preventMovementUntilSwipeScrollTolerance={true}
            swipeable
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
            {cardDetails?.map((item, index) => {
              return <ClientCoreCard key={index} data={item} />;
            })}
          </CustomCarousel>
          <BottomImageContainer>
            <Image src={coreBottomImage} alt='' />
          </BottomImageContainer>
        </CoreWrapper>
      </Container>
    </Section>
  );
}
