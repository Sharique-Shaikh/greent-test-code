import {
  CardWrapper,
  ProfileContainer,
  ProfileDetail,
  ProfileDesignation,
  ProfileName,
  FlagImage,
  ProfileDescription,
  ProfileIcons,
  ProfileWrapper,
  PersonImage,
} from './CardStyle';
import Person1 from '../../public/assets/images/Arun.svg';
import Person2 from '../../public/assets/images/Charu.svg';
import Person3 from '../../public/assets/images/Brian.jpeg';

// import Person4 from '../../public/assets/images/Novri.jpg';
import Person4 from '../../public/assets/images/Avinash-Image-profile-v2.jpg';
import Person5 from '../../public/assets/images/Hoa.jpg';
import Person6 from '../../public/assets/images/Tito.jpg';

import Image from 'next/image';
import Flag from '../../public/assets/images/Flag.svg';

import LinkedIn from '../../public/assets/icons/Linkedin.svg';
import Twitter from '../../public/assets/icons/Twitter.svg';
import { SeeAll, SeeAllContainer } from '../ClientFolks/ClientFolksStyle';
import {
  BottomContainer,
  CountryName,
  CountryWrap,
  SocialMediaIconWrap,
} from '../ClientFolksCard/ClientFolksCardStyle';

import singaporeFlag from '../../public/assets/images/singaporeFlag.svg';
import malaysiaFlag from '../../public/assets/images/malaysiaFlag.svg';
import vietnamFlag from '../../public/assets/images/vietnamFlag.svg';
import indonesiaFlag from '../../public/assets/images/indonesiaFlag.svg';
import TeamArrow from '../../public/assets/images/TeamArrow.svg';
import { useRouter } from 'next/navigation';

const teamLinkedInUrls = {
  Charu: 'https://www.linkedin.com/in/charuvagun-s-781b6325/',
  Arun: 'https://www.linkedin.com/in/arunkumar2020/',
  Tito: 'https://www.linkedin.com/in/tito-zenko-3913011b/',
  Avinash: ' http://www.linkedin.com/in/avinashtanwar12/',
  Brian: 'https://www.linkedin.com/in/brian-fernandez-62745b1b/',
  Hoa: 'https://www.linkedin.com/in/quynh-hoa-ngo-37796493',
};

export default function ProfileCard() {
  const router = useRouter();
  const handleRedirection = (url) => {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.click();
  };

  return (
    <>
      <ProfileWrapper>
        <CardWrapper>
          <PersonImage src={Person1} alt='person1' />
          <ProfileDetail>
            <ProfileContainer>
              <div>
                <ProfileName>Arunkumar Rajasekaran</ProfileName>
                <ProfileDesignation>Co-founder</ProfileDesignation>
              </div>
            </ProfileContainer>

            <ProfileDescription>
              <p>
                12 years of Marketing, Strategy and VC experience. Worked across
                businesses in their Growth Strategy, Marketing and Customer
                Success
              </p>
            </ProfileDescription>

            <BottomContainer>
              <SocialMediaIconWrap>
                <CountryWrap>
                  <Image src={Flag} alt='flag' />
                  <CountryName>{'India'}</CountryName>
                </CountryWrap>
                <Image
                  src={LinkedIn}
                  alt=''
                  onClick={() => handleRedirection(teamLinkedInUrls.Arun)}
                />
              </SocialMediaIconWrap>
            </BottomContainer>
          </ProfileDetail>
        </CardWrapper>

        <CardWrapper>
          <PersonImage src={Person2} alt='person2' />
          <ProfileDetail>
            <ProfileContainer>
              <div>
                <ProfileName>Charuvagun S</ProfileName>
                <ProfileDesignation>Co-founder</ProfileDesignation>
              </div>
            </ProfileContainer>

            <ProfileDescription>
              <p>
                10 years of experience in delivering growth. Expert in setting
                up processes across sales & project department across SEA.
              </p>
            </ProfileDescription>

            <BottomContainer>
              <SocialMediaIconWrap>
                <CountryWrap>
                  <Image src={singaporeFlag} alt='flag' />
                  <CountryName>{'Singapore'}</CountryName>
                </CountryWrap>
                <Image
                  src={LinkedIn}
                  alt=''
                  onClick={() => handleRedirection(teamLinkedInUrls.Charu)}
                />
              </SocialMediaIconWrap>
            </BottomContainer>
          </ProfileDetail>
        </CardWrapper>

        <CardWrapper>
          <PersonImage src={Person3} alt='person3' unoptimized />
          <ProfileDetail>
            <ProfileContainer>
              <div>
                <ProfileName>Brian Fernandez</ProfileName>
                <ProfileDesignation>
                  Geo Partner & Sales Leader
                </ProfileDesignation>
              </div>
            </ProfileContainer>

            <ProfileDescription>
              <p>
                15+ years experience in Customer Engagement for some leading
                brands. Has been in B2B SaaS sales for over 6 years across SEA.
              </p>
            </ProfileDescription>

            <BottomContainer>
              <SocialMediaIconWrap>
                <CountryWrap>
                  <Image src={malaysiaFlag} alt='flag' />
                  <CountryName>{'Malaysia'}</CountryName>
                </CountryWrap>
                <Image
                  src={LinkedIn}
                  alt=''
                  onClick={() => handleRedirection(teamLinkedInUrls.Brian)}
                />
              </SocialMediaIconWrap>
            </BottomContainer>
          </ProfileDetail>
        </CardWrapper>

        <CardWrapper>
          <PersonImage src={Person4} alt='person3' unoptimized />
          <ProfileDetail>
            <ProfileContainer>
              <div>
                <ProfileName>Avinash Tanwar</ProfileName>
                <ProfileDesignation>
                  Engagement Manager
                </ProfileDesignation>
              </div>
            </ProfileContainer>

            <ProfileDescription>
              <p>
                10+ Years of experience in CRM lifecycle marketing, loyalty program design, and campaign execution.
Backed by strong expertise in segmentation, automation, and performance optimization.
              </p>
            </ProfileDescription>

            <BottomContainer>
              <SocialMediaIconWrap>
                <CountryWrap>
                  <Image src={Flag} alt='flag' />
                  <CountryName>{'India'}</CountryName>
                </CountryWrap>
                <Image
                  src={LinkedIn}
                  alt=''
                  onClick={() => handleRedirection(teamLinkedInUrls.Avinash)}
                />
              </SocialMediaIconWrap>
            </BottomContainer>
          </ProfileDetail>
        </CardWrapper>

        <CardWrapper>
          <PersonImage src={Person5} alt='person5' unoptimized />
          <ProfileDetail>
            <ProfileContainer>
              <div>
                <ProfileName>Quynh Hoa NGO</ProfileName>
                <ProfileDesignation>
                  Geo Partner & Consultant
                </ProfileDesignation>
              </div>
            </ProfileContainer>

            <ProfileDescription>
              <p>
                10+ years experience in Program Management & Customer Success
                for global brands. Consulted top brands in SG and VN.
              </p>
            </ProfileDescription>

            {/* <ProfileIcons>
            <Image src={LinkedIn} alt='linkedin' />
            <Image src={Twitter} alt='twitter' />
          </ProfileIcons> */}

            <BottomContainer>
              <SocialMediaIconWrap>
                <CountryWrap>
                  <Image src={vietnamFlag} alt='flag' />
                  <CountryName>{'Vietnam'}</CountryName>
                </CountryWrap>
                <Image
                  src={LinkedIn}
                  alt=''
                  onClick={() => handleRedirection(teamLinkedInUrls.Hoa)}
                />
              </SocialMediaIconWrap>
            </BottomContainer>
          </ProfileDetail>
        </CardWrapper>

        <CardWrapper>
          <PersonImage src={Person6} alt='person6' unoptimized />
          <ProfileDetail>
            <ProfileContainer>
              <div>
                <ProfileName>Tito Zenko</ProfileName>
                <ProfileDesignation>
                  Business Partner & BD Lead{' '}
                </ProfileDesignation>
              </div>
            </ProfileContainer>

            <ProfileDescription>
              <p>
                10 years of experience in Business Development. Has great
                relationships in Retail, FMCG and Banking.
              </p>
            </ProfileDescription>

            <BottomContainer>
              <SocialMediaIconWrap>
                <CountryWrap>
                  <Image src={indonesiaFlag} alt='flag' />
                  <CountryName>{'Indonesia'}</CountryName>
                </CountryWrap>
                <Image
                  src={LinkedIn}
                  alt=''
                  onClick={() => handleRedirection(teamLinkedInUrls.Tito)}
                />
              </SocialMediaIconWrap>
            </BottomContainer>
          </ProfileDetail>
        </CardWrapper>
      </ProfileWrapper>
      <SeeAllContainer onClick={() => router.push('/about-us')}>
        <SeeAll>Know more about our team</SeeAll>
        <div>
          <Image src={TeamArrow} alt='arrow' />
        </div>
      </SeeAllContainer>
    </>
  );
}
