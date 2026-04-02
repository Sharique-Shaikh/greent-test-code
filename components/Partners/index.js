import {
  Container,
  Section,
  SectionTitle,
  SectionDescription,
} from '../common/CommonStyle';
import { PartnerWrapper } from './PartnersStyle';
import CustomerCard from '../CustomerCard';
import { Carousel } from 'react-responsive-carousel';
import Arrow from '../../public/assets/images/Arrow.svg';
import { useEffect, useState } from 'react';

const CustomArrow = ({ direction, onClick }) => {
  const arrowIcon = direction === 'left' ? '←' : '→'; // Customize arrow icon as needed

  return (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
      }}
    >
      <Image src={Arrow} alt='prev-arrow' height={10} width={10} />
    </button>
  );
};

export default function Partners() {
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
        <SectionTitle>What our customers say</SectionTitle>
        <SectionDescription>
          We disrupt conventional sales and consulting paradigms, setting a
          fresh benchmark for sales excellence.Ask our clients
        </SectionDescription>
        <PartnerWrapper style={{ position: 'relative' }}>
          <Carousel
            autoPlay={true}
            showIndicators={false}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            infiniteLoop
            preventMovementUntilSwipeScrollTolerance={true}
            centerMode
            swipeScrollTolerance={isMobile ? 0 : 50}
            centerSlidePercentage={isMobile ? 100 : 50}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <CustomArrow
                  direction='left'
                  id='test-car'
                  onClick={onClickHandler}
                />
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <CustomArrow direction='right' onClick={onClickHandler} />
              )
            }
          >
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
          </Carousel>
        </PartnerWrapper>
      </Container>
    </Section>
  );
}
