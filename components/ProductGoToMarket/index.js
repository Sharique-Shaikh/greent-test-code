import React from 'react';
import {
  Container,
  Line,
  Section,
  SectionDescription,
  SectionDescriptionPartner,
  SectionTitle,
} from '../common/CommonStyle';
import {
  ButtonWrapper,
  ContentOneCont,
  ContentSubCont,
  ContentSubTitle,
  ContentTitle,
  ContentWrapper,
  FastTitle,
  FastWrap,
  ProductMarketWrap,
} from './ProductGoToMarketStyle';
import PrimaryButton from '../PrimaryButton';
import Image from 'next/image';
import smallGraph from '../../public/assets/images/smallGraph.svg';
import GoMarketCard from './GoMarketCard';
import { useRouter } from 'next/navigation';

const ProductGoToMarket = () => {
  const router = useRouter();
  return (
    <Section>
      <Container>
        <SectionTitle>Go-To-Market Strategy</SectionTitle>
        <SectionDescriptionPartner>
          We closely collaborate with your teams to enhance sales techniques,
          using unique methodologies that delivers impressive results even for
          complex organizations. Our support includes advanced analytics and
          powerful digital tools.
        </SectionDescriptionPartner>
        <ProductMarketWrap>
          <ContentWrapper>
            <ContentTitle>
              Launch your<Line>product 2x faster</Line>
            </ContentTitle>
            <FastWrap>
              <Image src={smallGraph} alt='' />
              <FastTitle>Faster market entry</FastTitle>
            </FastWrap>
            <FastWrap>
              <Image src={smallGraph} alt='' />
              <FastTitle>More countries at the same time</FastTitle>
            </FastWrap>
          </ContentWrapper>
          <ContentWrapper>
            <ContentOneCont>
              Revamp your sales Go-to-Market Strategy.
            </ContentOneCont>
            <ContentSubCont>
              Transform your sales performance by reinvigorating your
              go-to-market strategy! We help uncover hidden opportunities,
              optimize resources, and tailor sales approaches using advanced
              analytics and digital tools. This collaborative approach drives
              rapid, sustainable successes and revolutionizes your sales
              performance
            </ContentSubCont>
            <ContentSubTitle>
              {'Get your action plan in < 15days'}
            </ContentSubTitle>
            <ButtonWrapper>
              <PrimaryButton
                onClick={() => router.push('/contact-us')}
                btnTitle={"Let's catchup now"}
                btnWidth={'80%'}
                bgHover={false}
              />
            </ButtonWrapper>
          </ContentWrapper>
        </ProductMarketWrap>
        <GoMarketCard />
      </Container>
    </Section>
  );
};

export default ProductGoToMarket;
