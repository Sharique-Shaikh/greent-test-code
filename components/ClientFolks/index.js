import Image from 'next/image';
import {
  Container,
  Section,
  SectionDescription,
  SectionTitle,
} from '../common/CommonStyle';
import {
  FolksCardWrap,
  FolksContainer,
  LeftMiddleImage,
  RightBottomImage,
  RightMiddleImage,
  SeeAll,
  TopImageContainer,
} from './ClientFolksStyle';
import topImage from '../../public/assets/images/folksTopImg.svg';
import leftMiddleImg from '../../public/assets/images/folksLeftImg.svg';
import rightMiddleImg from '../../public/assets/images/folksRightImg.svg';
import rightBottomMiddleImg from '../../public/assets/images/folksRightBottomImg.svg';
import leaderOne from '../../public/assets/images/leaderOne.svg';
import leaderTwo from '../../public/assets/images/leaderTwo.svg';
import leaderThree from '../../public/assets/images/Brian.jpeg';
// import leaderFour from '../../public/assets/images/Novri.jpg';
import leaderFour from '../../public/assets/images/Avinash-Image-profile-v2.jpg';
import leaderFive from '../../public/assets/images/Hoa.jpg';
import leaderSix from '../../public/assets/images/Tito.jpg';
import flag from '../../public/assets/images/indianFlag.svg';
import ClientFolksCard from '../ClientFolksCard';
import singaporeFlag from '../../public/assets/images/singaporeFlag.svg';
import malaysiaFlag from '../../public/assets/images/malaysiaFlag.svg';
import vietnamFlag from '../../public/assets/images/vietnamFlag.svg';
import indonesiaFlag from '../../public/assets/images/indonesiaFlag.svg';

export default function ClientFolks() {
  const leaderCard = [
    {
      image: leaderOne,
      name: 'Arunkumar Rajasekaran',
      designation: 'Co-Founder | GTM Strategy, Brand & Marketing | IIML',
      description:
        '12 years of Marketing, Strategy and VC experience. Worked across businesses in their Growth Strategy, Marketing and Customer Success.',
      flagIcon: flag,
      countryName: 'India',
      linkedInUrl: 'https://www.linkedin.com/in/arunkumar2020/',
    },
    {
      image: leaderTwo,
      name: 'Charuvagun S',
      designation: 'Co-Founder | Sales and Operations Excellence | IIML',
      description:
        '10 years of experience in delivering growth. Expert in setting up processes across sales & project department across SEA.',
      flagIcon: singaporeFlag,
      countryName: 'Singapore',
      linkedInUrl: 'https://www.linkedin.com/in/charuvagun-s-781b6325/',
    },
    {
      image: leaderThree,
      name: 'Brian Fernandez',
      designation: 'Geo Partner & Sales Leader',
      description:
        '15+ years experience in Customer Engagement for some leading brands. Has been in B2B SaaS sales for over 6 years across SEA.',
      flagIcon: malaysiaFlag,
      countryName: 'Malaysia',
      linkedInUrl: 'https://www.linkedin.com/in/brian-fernandez-62745b1b/',
    },
    {
      image: leaderFour,
      name: 'Avinash Tanwar',
      designation: 'Engagement Manager',
      description:
        '10+ Years of experience in CRM lifecycle marketing, loyalty program design, and campaign execution.Backed by strong expertise in segmentation, automation, and performance optimization.',
      flagIcon: flag,
      countryName: 'India',
      linkedInUrl: 'http://www.linkedin.com/in/avinashtanwar12/',
    },
    {
      image: leaderFive,
      name: 'Quynh Hoa NGO',
      designation: 'Geo Partner & Consultant',
      description:
        '10+ years experience in Program Management & Customer Success for global brands. Consulted top brands in SG and VN.',
      flagIcon: vietnamFlag,
      countryName: 'Vietnam',
      linkedInUrl: 'https://www.linkedin.com/in/quynh-hoa-ngo-37796493',
    },
    {
      image: leaderSix,
      name: 'Tito Zenko',
      designation: 'Business Partner & BD Lead',
      description:
        '10 years of experience in Business Development. Has great relationships in Retail, FMCG and Banking.',
      flagIcon: indonesiaFlag,
      countryName: 'Indonesia',
      linkedInUrl: 'https://www.linkedin.com/in/tito-zenko-3913011b/',
    },
  ];

  return (
    <Section>
      <Container>
        <SectionTitle>Our Team</SectionTitle>
        <SectionDescription>
          Our goal is to create a sustainable and collaborative go-to-market
          (GTM) and growth platform for products and businesses, offering a
          strategic cornerstone for their medium to long-term expansion
        </SectionDescription>
        <FolksContainer>
          <TopImageContainer>
            <Image src={topImage} alt='img' />
          </TopImageContainer>
          <LeftMiddleImage>
            <Image src={leftMiddleImg} alt='' />
          </LeftMiddleImage>
          <RightMiddleImage>
            <Image src={rightMiddleImg} alt='' />
          </RightMiddleImage>
          <RightBottomImage>
            <Image src={rightBottomMiddleImg} alt='' />
          </RightBottomImage>
          <FolksCardWrap>
            {leaderCard.map((item) => (
              <ClientFolksCard
                key={item.name}
                image={item.image}
                title={item.name}
                designation={item.designation}
                description={item.description}
                countryName={item.countryName}
                flagIcon={item.flagIcon}
                linkedInUrl={item.linkedInUrl}
              />
            ))}
          </FolksCardWrap>
          {/* <SeeAll>See all team members</SeeAll> */}
        </FolksContainer>
      </Container>
    </Section>
  );
}
