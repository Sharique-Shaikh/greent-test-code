import React from 'react';
import {
  Container,
  Section,
  SectionDescription,
  SectionTitle,
} from '../common/CommonStyle';
import {
  ArrowImgWrap,
  BottomImageContainer,
  BtnImageWrap,
  FlowChartWrapper,
  ProductExecutionWrapper,
  TopImageContainer,
} from './ProductExecutionStyle';
import sassDesign from '../../public/assets/images/sassDesign.svg';
import sassDesignRight from '../../public/assets/images/sassDesignRight.svg';
import Image from 'next/image';
import demandGeneration from '../../public/assets/images/demandGeneration.svg';
import internationalSales from '../../public/assets/images/internationalSales.svg';
import rightToWin from '../../public/assets/images/rightToWin.svg';
import purpleArrowRight from '../../public/assets/images/purpleArrowRight.svg';

const ProductExecution = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Execution enterprise</SectionTitle>
        <SectionDescription>
          Empower your pipeline with discerning decision-makers, navigate
          audiences through their buyer journeys, and attain concrete outcomes
          with our B2B demand generation mechanism. Our outbound and sales
          engagement consultants function as adept experts, supervising your
          outbound efficacy and aiding teams in hitting their objectives.
        </SectionDescription>
        <ProductExecutionWrapper>
          <TopImageContainer>
            <Image src={sassDesign} alt='sass' />
          </TopImageContainer>
          <FlowChartWrapper>
            <BtnImageWrap>
              <Image src={demandGeneration} alt='demand' />
            </BtnImageWrap>
            <ArrowImgWrap>
              <Image src={purpleArrowRight} alt='demand' />
            </ArrowImgWrap>
            <BtnImageWrap>
              <Image src={internationalSales} alt='sales' />
            </BtnImageWrap>
            <ArrowImgWrap>
              <Image src={purpleArrowRight} alt='demand' />
            </ArrowImgWrap>
            <BtnImageWrap>
              <Image src={rightToWin} alt='win' />
            </BtnImageWrap>
          </FlowChartWrapper>
          <BottomImageContainer>
            <Image src={sassDesignRight} alt='sass' />
          </BottomImageContainer>
        </ProductExecutionWrapper>
      </Container>
    </Section>
  );
};

export default ProductExecution;
