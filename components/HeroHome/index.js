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
  SubmitButton,
  WrapperDiv,
} from './HeroStyle';
// import HomeLogo from "assets/images/Home.jpg";
import HeroLogo from '../../public/assets/images/HeroLogo.svg';
import Image from 'next/image';

export default function Hero() {
  return (
    <GlobalWrapper>
      <WrapperDiv>
        <Section>
          <Container>
            <HeroContainer>
              {/* <Image src={HeroLogo} alt='logo' /> */}
              <div>
                <HeroTitle>25+ products | 100+ brands consulted</HeroTitle>
                <HeroDescription>
                  Specialized in CRM & Loyalty Advisory
                </HeroDescription>
                <SubmitButton>Get Started</SubmitButton>
              </div>
            </HeroContainer>
          </Container>
        </Section>
      </WrapperDiv>
    </GlobalWrapper>
  );
}
