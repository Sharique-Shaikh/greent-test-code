import {
  Container,
  GlobalWrapper,
  Section,
  StyledButton,
} from '../common/CommonStyle';
import {
  HeroContainer,
  HeroDescription,
  HeroTitle,
  PrevArrowBtn,
  NextArrowBtn,
  CustomNextArrow,
  CustomPrevArrow,
  TestContainer,
  ButtonContainer,
  ArrowContainer,
  ConsultButton,
  HeroDisclaimer,
  HightLightTitle,
  DisclaimerTitle,
  HightSymbol,
  HighlightSymbol,
  Divider,
} from './HeroStyle';
// import HomeLogo from "assets/images/Home.jpg";
import Chip from '../Chip';
import HeroLogo from '../../public/assets/images/HeroLogo.svg';
import HeroLogo2 from '../../public/assets/images/HeroLogo2.svg';
import HeroLogo3 from '../../public/assets/images/HeroLogo3.svg';
import HeroLogo4 from '../../public/assets/images/CRM-Loyalty.svg';

// import Arrow from '../../public/assets/icons/arrow.svg';
import Arrow from '../../public/assets/images/Arrow.svg';

import Image from 'next/image';
import { FooterDivider } from '../Footer/FooterStyle';
import NormalArrow from '../../public/assets/images/NormalArrow.svg';
import Banner from '../../public/assets/images/HeroLogo4.svg';
import Banner3 from '../../public/assets/images/Banner3.jpeg';

import { CustomCarousel } from '../common/CommonStyle';
import TrustBy from '../TrustBy';
import { useRouter } from 'next/navigation';

const renderCustomPrevArrow = (onClickHandler, hasPrev, label) => {
  return (
    <CustomPrevArrow>
      <Image src={Arrow} alt='prev-arrow' height={10} width={10} />
    </CustomPrevArrow>
  );
};

const renderCustomNextArrow = (onClickHandler, hasNext, label) => {
  return (
    <CustomNextArrow>
      {/* <button onClick={onClickHandler} disabled={!hasNext} aria-label={label}>
        Next
      </button> */}
      <Image src={Arrow} alt='prev-arrow' height={10} width={10} />
    </CustomNextArrow>
  );
};

const HeroData = [
    {
    id: 1,
    title: 'Redefine your CX, CRM and Loyalty Strategy for Growth',
    subTitle:
      'Best in class CX, CRM and Loyalty solutining from industry experts with experience in Loyalty and CRM projects for 100+ brands',
    imgSrc: HeroLogo4,
    disclaimerTitle: '50+ years',
    disclaimerSubTitle: 'CRM & Loyalty Experience',

    disclaimerTitle2: '100+ brands',
    disclaimerSubTitle2: 'Consulted',
  },
    {
    id: 2,
    title: 'Right, Relevant and Handpicked software products',
    subTitle:
      'Navigate the SaaS landscape & choose the right software solution. We hunt, evaluate, onboard and integrate the solution you deserve!',
    imgSrc: Banner,
    disclaimerTitle: '100+ handpicked',
    disclaimerSubTitle: 'Relevant products',

    disclaimerTitle2: '5x efficient',
    disclaimerSubTitle2: 'Solutioning',
  },
    {
    id: 3,
    title: 'Retail, FMCG, Manufacturing, Ecommerce',
    subTitle:
      'Stay ahead of the curve with our Industry focused solutioning and implementation to meet the fast paced environment',
    imgSrc: HeroLogo3,
    disclaimerTitle: '100% industry focused ',
    disclaimerSubTitle: 'Solutioning',

    disclaimerTitle2: '25+ leading brands ',
    disclaimerSubTitle2: 'Consulted',
  },
  {
    id: 4,
    title: 'Technology Adoption Simplified',
    subTitle:
      'Digital transformation done right with dynamic and relevant technology solution stack for growing businesses. Simplifying Technology at every step!',
    imgSrc: HeroLogo2,
    disclaimerTitle: '3x better',
    disclaimerSubTitle: 'Tech Architecture',

    disclaimerTitle2: '50% faster',
    disclaimerSubTitle2: 'Deployment',
  }
];

export default function Hero() {
  const router = useRouter();
  return (
    <GlobalWrapper>
      <Section>
        <Container>
          <TestContainer>
            <CustomCarousel
              autoPlay={true}
              interval={10000}
              showIndicators={true}
              showThumbs={false}
              showArrows={false}
              showStatus={false}
              infiniteLoop
              preventMovementUntilSwipeScrollTolerance={true}
              swipeScrollTolerance={50}
              // renderArrowPrev={renderCustomPrevArrow}
              // renderArrowNext={renderCustomNextArrow}
            >
              {HeroData.map((data) => {
                return (
                  <HeroContainer>
                    <Image src={data?.imgSrc} alt='logo' />
                    <div>
                      <HeroTitle>{data?.title}</HeroTitle>
                      <HeroDescription>{data?.subTitle}</HeroDescription>
                      <br />

                      <ConsultButton onClick={() => router.push('/contact-us')}>
                        Consult Now
                        <ArrowContainer>
                          <Image src={Arrow} alt='arrow' />
                        </ArrowContainer>
                      </ConsultButton>

                      <br />
                      <br />
                      <br />
                      <br />
                      <br />

                      <Divider />

                      {/* <HeroDisclaimer>
                        <DisclaimerTitle>
                          Best Tech Architecture <br />
                          <HighlightSymbol> - </HighlightSymbol>
                          <HightLightTitle>
                            3X better Solution
                          </HightLightTitle>{' '}
                        </DisclaimerTitle>

                        <DisclaimerTitle>
                          Evaluate the right way <br />
                          <HighlightSymbol> - </HighlightSymbol>
                          <HightLightTitle> 50% faster</HightLightTitle>
                        </DisclaimerTitle>
                      </HeroDisclaimer> */}
                      <HeroDisclaimer>
                        <DisclaimerTitle>
                          <HightLightTitle>
                            {data?.disclaimerTitle}
                          </HightLightTitle>{' '}
                          <br />
                          {data?.disclaimerSubTitle}
                        </DisclaimerTitle>

                        <DisclaimerTitle>
                          <HightLightTitle>
                            {' '}
                            {data?.disclaimerTitle2}
                          </HightLightTitle>{' '}
                          <br />
                          {data?.disclaimerSubTitle2}
                        </DisclaimerTitle>
                      </HeroDisclaimer>
                    </div>
                  </HeroContainer>
                );
              })}
            </CustomCarousel>
          </TestContainer>
        </Container>
      </Section>
      {/* <TrustBy /> */}
    </GlobalWrapper>
  );
}
