import { useEffect, useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import { Container, Section, SectionTitle } from '../common/CommonStyle';
import { JoinButtonWrap, JoinContent, JoinSubTitle } from './ClientTeamStyle';
import Link from 'next/link';

export default function ClientTeam() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial call to set button width
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup by removing event listener
    };
  }, []);

  return (
    <Section>
      <Container>
        <SectionTitle>Careers</SectionTitle>
        <JoinSubTitle>
          Seeking to make a lasting difference in people's lives?
        </JoinSubTitle>
        <JoinContent>
          At Greentern, our mission is to transform the way organizations sell
          and collaborate by fostering a culture of radical transparency,
          setting a new benchmark for sales excellence, and ensuring seamless
          access to critical information and project management tools. We
          prioritize exceptional customer experiences at every touchpoint. If
          you share our values and have a passion for sales and revenue growth,
          we want to hear from you! Even if there isn't a perfect job match,
          submit a general application and show us how you can make a meaningful
          impact at Greentern and for our clients.
        </JoinContent>
        <Link href={'https://forms.gle/2ZukKdEXVbYNHquU8'} target='_blank'>
          <JoinButtonWrap>
            <PrimaryButton
              btnTitle={'Join Us'}
              btnWidth={isMobile ? '60%' : '16%'}
              textalign={'left'}
              bgHover={false}
            />
          </JoinButtonWrap>
        </Link>
      </Container>
    </Section>
  );
}
