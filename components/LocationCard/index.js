import Image from 'next/image';
import {
  Address,
  CardContainer,
  LocationLogo,
  Contact,
  ContactMail,
  CountryName,
  LocationDetails,
  ContactDiv,
  ContactMailDiv,
  CountryDiv,
  DescriptionWrapper,
} from './LocationCardStyle';
import LocateLogo from '../../public/assets/images/LocationLogo.svg';
import PhoneIcon from '../../public/assets/icons/phone-icon.svg';
import MailIcon from '../../public/assets/icons/mail-icon.svg';
import Flag from '../../public/assets/images/Flag.svg';

export default function LocationCard({
  country,
  address,
  flag,
  address1,
  address2,
  address3,
  landMark,
}) {
  return (
    <CardContainer>
      <LocationLogo>
        <Image src={LocateLogo} alt='location-logo' height={54} width={54} />
      </LocationLogo>

      <LocationDetails>
        <CountryDiv>
          <CountryName>{country}</CountryName>

          <Image src={flag} alt='flag' height={20} />
        </CountryDiv>

        <DescriptionWrapper>
          <div style={{ textAlign: 'left' }}>
            {/* <Address>{address}</Address> */}
            <Address>{address1}</Address>
            <Address>{address2}</Address>

            <Address>{address3}</Address>
            <Address>{landMark}</Address>
          </div>
          {/* 
          <ContactDiv>
            <Image src={PhoneIcon} alt='phone-icon' width={20} />
            <Contact href='tel:6243 2291'>6243 2291</Contact>
          </ContactDiv>
          <ContactMailDiv>
            <Image src={MailIcon} alt='mail-icon' />
            <ContactMail href='mailto:connectgreen@greentern.com'>
              connectgreen@greentern.com
            </ContactMail>
          </ContactMailDiv> */}
        </DescriptionWrapper>
      </LocationDetails>
    </CardContainer>
  );
}
