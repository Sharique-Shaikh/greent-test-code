import PrimaryButton from '../PrimaryButton';
import { Container, Line, Section } from '../common/CommonStyle';
import {
  SolutionBanner,
  ButtonDetail,
  ButtonLine,
  ButtonWrapper,
} from './SolutionStyle';
import SolutionEnterprise from '@/components/SolutionEnterprise';
import SolutionCountries from '@/components/SolutionCountries';
import Link from 'next/link';

export default function Solutions() {
  return (
    <Section>
      <Container>
        <SolutionBanner>
          <Line>Intelligent and powerful technology solutions!</Line>
          <Line>Built for you!</Line>
        </SolutionBanner>

        <Link href={'/contact-us'}>
          <ButtonLine>
            <ButtonWrapper>
              <ButtonDetail>
                <PrimaryButton
                  btnTitle='Let’s catchup now'
                  btnWidth={'285px'}
                  bgHover={false}
                />
              </ButtonDetail>
            </ButtonWrapper>
          </ButtonLine>
        </Link>
        <SolutionEnterprise />
      </Container>
      <SolutionCountries />
    </Section>
  );
}
