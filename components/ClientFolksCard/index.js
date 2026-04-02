import Image from 'next/image';
import {
  Card,
  CountryName,
  CountryWrap,
  Description,
  Designation,
  Details,
  ImageWrapper,
  BottomContainer,
  SocialMediaIconWrap,
  Title,
  TitleWrap,
} from './ClientFolksCardStyle';
import linkedInIcon from '../../public/assets/icons/linkedInIcon.svg';

export default function ClientFolksCard({
  image,
  title,
  description,
  designation,
  flagIcon,
  countryName,
  linkedInUrl,
}) {
  const handleLinkedInClick = () => {
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card>
      <Image src={image} alt='' className='leaders__img' unoptimized />
      <Details>
        <TitleWrap>
          <Title>{title}</Title>
        </TitleWrap>
        <Designation>{designation}</Designation>
        <Description>{description}</Description>
      </Details>
      <BottomContainer>
        <SocialMediaIconWrap>
          <CountryWrap>
            <Image src={flagIcon} alt='flag' />
            <CountryName>{countryName}</CountryName>
          </CountryWrap>
          <Image
            src={linkedInIcon}
            alt=''
            onClick={handleLinkedInClick}
            style={{ cursor: 'pointer' }}
          />
        </SocialMediaIconWrap>
      </BottomContainer>
    </Card>
  );
}
