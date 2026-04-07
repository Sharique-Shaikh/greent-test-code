import {
  Container,
  Section,
  SectionTitle,
  SectionDescription,
} from '../common/CommonStyle';
// import MetricsImg from '../../public/assets/images/Metrics.svg';
// import MetricsImg from '../../public/assets/images/Our-Services.png';
import MetricsImg from '../../public/assets/images/Oue-Services-List-image.png';
import Image from 'next/image';
import { MetricsImgDiv } from './MetricStyle';

export default function Metrics() {
  return (
    <Section>
      <Container>
        <SectionTitle>Our Services </SectionTitle>
        <SectionDescription>
          We challenge traditional sales and consulting models and create a new
          standard for sales excellence.
        </SectionDescription>
        <MetricsImgDiv>
          <Image src={MetricsImg} alt='metrics' />
        </MetricsImgDiv>
      </Container>
    </Section>
  );
}
