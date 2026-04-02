import React from 'react';
import {
  Container,
  Section,
  SectionDescription,
  SectionSubTitle,
  SectionTitle,
} from '../common/CommonStyle';
import {
  ArrowImgWrap,
  BtnImageWrap,
  FlowChartWrapper,
} from './ProductWhatWeDoStyle';
import Image from 'next/image';
import arrowLeft from '../../public/assets/images/arrowLeft.svg';
import analysisBtn from '../../public/assets/images/analysisBtn.svg';
import arrowRight from '../../public/assets/images/arrowRight.svg';
import productBtn from '../../public/assets/images/productBtn.svg';
import buisnessBtn from '../../public/assets/images/buisnessBtn.svg';
import ProductCard from './ProductCard';

const ProductsWhatWeDo = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>What we do ?</SectionTitle>
        <SectionSubTitle>
          We help exceptional products seize global business opportunities
        </SectionSubTitle>
        <SectionDescription>
          With more than three decades of combined industry experience, we work
          with numerous products across diverse categories. Moreover, we delve
          into digital initiatives encompassing digital transformation, big
          data, HR, supply chain, marketing, finance, operations, etc., offering
          local sales support in Indonesia, the Philippines, Thailand, Malaysia,
          Vietnam, and Singapore.
        </SectionDescription>
        <FlowChartWrapper>
          <BtnImageWrap>
            <Image src={buisnessBtn} alt='' />
          </BtnImageWrap>
          <ArrowImgWrap>
            <Image src={arrowLeft} alt='' />
          </ArrowImgWrap>
          <BtnImageWrap>
            <Image src={analysisBtn} alt='' />
          </BtnImageWrap>
          <ArrowImgWrap>
            <Image src={arrowRight} alt='' />
          </ArrowImgWrap>
          <BtnImageWrap>
            <Image src={productBtn} alt='' />
          </BtnImageWrap>
        </FlowChartWrapper>
        <ProductCard />
      </Container>
    </Section>
  );
};

export default ProductsWhatWeDo;
