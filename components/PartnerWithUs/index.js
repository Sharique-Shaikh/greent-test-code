import Image from 'next/image';
import { Container, Section, SectionTitle } from '../common/CommonStyle';
import {
  PartnerDetail,
  PartnerGrid,
  PartnerLogo,
  PartnerSubTitle,
  PartnerTitle,
} from './PartnerStyle';
import PartnerImage from '../../public/assets/images/database.svg';
import Hands from '../../public/assets/icons/hands.svg';
import Nuclear from '../../public/assets/icons/nuclear.svg';
import Contact from '../../public/assets/icons/contact.svg';
import Map from '../../public/assets/icons/map.svg';
import Idea from '../../public/assets/icons/idea.svg';

export default function PartnerWithUs() {
  return (
    <Section>
      <Container>
        <SectionTitle>Why Partner With Us?</SectionTitle>
        <PartnerGrid>
          <PartnerDetail>
            <PartnerLogo src={PartnerImage} alt='partner-img' />
            <PartnerSubTitle>
              150+ Database Of Evaluated Products
            </PartnerSubTitle>
          </PartnerDetail>

          <PartnerDetail>
            <PartnerLogo src={Contact} alt='partner-img' />
            <PartnerSubTitle>
              50+ Years Of Technological Experience
            </PartnerSubTitle>
          </PartnerDetail>

          <PartnerDetail>
            <PartnerLogo src={Nuclear} alt='partner-img' />
            <PartnerSubTitle>100+ Network Of Tech Buyers</PartnerSubTitle>
          </PartnerDetail>

          <PartnerDetail>
            <PartnerLogo src={Hands} alt='partner-img' />
            <PartnerSubTitle>20+ Technology Partners</PartnerSubTitle>
          </PartnerDetail>

          <PartnerDetail>
            <PartnerLogo src={Map} alt='partner-img' />
            <PartnerSubTitle>Presence In 5 Countries</PartnerSubTitle>
          </PartnerDetail>

          <PartnerDetail>
            <PartnerLogo src={Idea} alt='partner-img' />
            <PartnerSubTitle>120+ Solutions Provided</PartnerSubTitle>
          </PartnerDetail>
        </PartnerGrid>
      </Container>
    </Section>
  );
}
