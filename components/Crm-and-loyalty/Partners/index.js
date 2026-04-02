import {
  Container,
  Section,
  SectionTitle,
  SectionDescription,
} from '../../common/CommonStyle';
import { PartnerWrapper } from './PartnersStyle';
import CustomerCard from '../../CustomerCard';
import { Carousel } from 'react-responsive-carousel';

export default function Partners() {
  return (
    <Section>
      <Container>
        <SectionTitle>What our customers say</SectionTitle>
        <SectionDescription>
          We disrupt conventional sales and consulting paradigms, setting a
          fresh benchmark for sales excellence.Ask our clients
        </SectionDescription>
        <PartnerWrapper>
          <Carousel
            autoPlay={true}
            showIndicators={false}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            infiniteLoop
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
            centerMode
            centerSlidePercentage={50}
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
