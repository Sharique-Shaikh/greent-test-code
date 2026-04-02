import Image from 'next/image';
import {
  Container,
  Section,
  SectionDescription,
  SectionTitle,
} from '../common/CommonStyle';
import {
  BottomImageContainer,
  SassWrapper,
  TopImageContainer,
} from './SassSolutionStyle';
import sassDesign from '../../public/assets/images/sassDesign.svg';
import sassDesignRight from '../../public/assets/images/sassDesignRight.svg';
import SassTab from '../SassTabs';
import SassCarousel from '../SassCarousel';

export default function SassSolution() {
  return (
    <Section>
      <Container>
        <SectionTitle>SaaS Solution</SectionTitle>
        <SectionDescription>
          Greentern enables great businesses with right technology solution and
          products that help them grow, sustain and become leaders whilst being
          extremely flexible and agile to the customer needs
        </SectionDescription>
        <SassWrapper>
          <TopImageContainer>
            <Image src={sassDesign} alt='sass' />
          </TopImageContainer>
          <SassTab />
          <SassCarousel />
          <BottomImageContainer>
            <Image src={sassDesignRight} alt='sass' />
          </BottomImageContainer>
        </SassWrapper>
      </Container>
    </Section>
  );
}
