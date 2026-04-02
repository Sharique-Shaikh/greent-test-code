import {
  Container,
  GlobalWrapper,
  Section,
  StyledButton,
} from '../../common/CommonStyle';
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
  CustomCarousel,
} from './HeroStyle';
import { useRouter } from 'next/navigation';

// import Arrow from '../../public/assets/icons/arrow.svg';
import Arrow from '../../../public/assets/images/Arrow.svg';

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NormalArrow from '../../../public/assets/images/NormalArrow.svg';
import Banner from '../../../public/assets/images/CRM-Loyalty.svg';
import PrimaryButton from '@/components/PrimaryButton';
import { Divider } from '@/components/Hero/HeroStyle';

const HeroData = [
  {
    id: 1,
    title: 'Redefine your CX, CRM and Loyalty Strategy for Growth',
    subTitle:
      'Best in class CX, CRM and Loyalty solutining from industry experts with experience in Loyalty and CRM projects for 100+ brands',
    imgSrc: Banner,
  },
];

export default function Hero() {
  const router = useRouter();
  return (
    <GlobalWrapper>
      <Section>
        <Container>
          <TestContainer>
            {HeroData.map((data) => {
              return (
                <HeroContainer>
                  <Image src={data?.imgSrc} alt='logo' />
                  <div>
                    <HeroTitle>{data?.title}</HeroTitle>
                    <HeroDescription>{data?.subTitle}</HeroDescription>
                    <br />

                    <ConsultButton
                      onClick={() => {
                        router.push('/contact-us');
                      }}
                    >
                      Consult Now
                      <ArrowContainer>
                        <Image src={Arrow} alt='arrow' />
                      </ArrowContainer>
                    </ConsultButton>

                    <br />
                    <br />
                    <br />

                    <Divider />

                    <HeroDisclaimer>
                      <DisclaimerTitle>
                        <HightLightTitle>50+ years</HightLightTitle> <br />
                        CRM & Loyalty Experience
                      </DisclaimerTitle>

                      <DisclaimerTitle>
                        <HightLightTitle>100+ brands </HightLightTitle> <br />
                        Consulted
                      </DisclaimerTitle>
                    </HeroDisclaimer>
                  </div>
                </HeroContainer>
              );
            })}
          </TestContainer>
        </Container>
      </Section>
    </GlobalWrapper>
  );
}
