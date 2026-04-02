import React from 'react';
import {
  Container,
  Section,
  SectionDescription,
  SectionTitle,
} from '../common/CommonStyle';
import CustomerCard from '../CustomerCard';
import { Carousel } from 'react-responsive-carousel';
import { PartnerWrapper } from '../Crm-and-loyalty/Partners/PartnersStyle';

const ProductSuccessStories = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Customer success stories</SectionTitle>
        <SectionDescription>
          Discover the experiences that shape our story. Inspired by our best
          work.
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
};

export default ProductSuccessStories;
