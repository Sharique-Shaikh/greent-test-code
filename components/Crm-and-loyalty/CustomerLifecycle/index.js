import Image from 'next/image';
import { Container, Section, SectionTitle } from '../../common/CommonStyle';
import CLM from '../../../public/assets/images/CLM.svg';
import { LifeCycleWrapper } from './LifeCycleStyle';

export default function CustomerLifecycle() {
  return (
    <LifeCycleWrapper>
      <Section>
        <Container>
          <SectionTitle>Customer Lifecycle Management</SectionTitle>
          <Image src={CLM} alt='CLM' />
        </Container>
      </Section>
    </LifeCycleWrapper>
  );
}
