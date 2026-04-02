import Image from 'next/image';
import { Container, Section, SectionTitle } from '../../common/CommonStyle';
import {
  LogoWrapper,
  PartnerDetail,
  PartnerGrid,
  PartnerLogo,
  PartnerSubTitle,
  PartnerTitle,
} from './FeaturesStyle';
import Optimal from '../../../public/assets/icons/optimal.svg';
import Business from '../../../public/assets/icons/business.svg';
import Finance from '../../../public/assets/icons/finance.svg';
import Crm from '../../../public/assets/icons/crm.svg';
import Rfp from '../../../public/assets/icons/rfp.svg';
import Management from '../../../public/assets/icons/management.svg';
import { IconWrapper } from '@/components/ContactUs/ContactDetails/ContactDetailStyle';

export default function Features() {
  return (
    <Section>
      <Container>
        <SectionTitle>Features</SectionTitle>
        <PartnerGrid>
          <PartnerDetail>
            <LogoWrapper>
              <PartnerLogo src={Optimal} alt='optimal-img' />
            </LogoWrapper>
            <PartnerSubTitle>Optimal Solution Match</PartnerSubTitle>
          </PartnerDetail>

          <PartnerDetail>
            <LogoWrapper>
              <PartnerLogo src={Business} alt='partner-img' />
            </LogoWrapper>
            <PartnerSubTitle>Strategic Business Justification</PartnerSubTitle>
          </PartnerDetail>

          <PartnerDetail>
            <LogoWrapper>
              <PartnerLogo src={Finance} alt='partner-img' />
            </LogoWrapper>
            <PartnerSubTitle>
              Assistance With Financial Calculation
            </PartnerSubTitle>
          </PartnerDetail>

          <PartnerDetail>
            <LogoWrapper>
              <PartnerLogo src={Crm} alt='partner-img' />
            </LogoWrapper>
            <PartnerSubTitle>
              CRM Campaign Strategy - Channel/Target/Offer
            </PartnerSubTitle>
          </PartnerDetail>

          <PartnerDetail>
            <LogoWrapper>
              <PartnerLogo src={Rfp} alt='partner-img' />
            </LogoWrapper>
            <PartnerSubTitle>RFP Creation</PartnerSubTitle>
          </PartnerDetail>

          <PartnerDetail>
            <LogoWrapper>
              <PartnerLogo src={Management} alt='partner-img' />
            </LogoWrapper>
            <PartnerSubTitle>Project Management</PartnerSubTitle>
          </PartnerDetail>
        </PartnerGrid>
      </Container>
    </Section>
  );
}
