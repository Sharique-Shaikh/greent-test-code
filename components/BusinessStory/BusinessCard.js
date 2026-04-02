import Image from 'next/image';
import {
  ProfileWrapper,
  CardWrapper,
  ProfileDetail,
  ProfileContainer,
  ProfileName,
  ProfileDescription,
  ProfileIcons,
  ProfileDesignation,
  ProfileSubDescription,
  BusinessDescription,
  ConnectDetail,
  CardImg,
} from './BusinessStoryStyle';
import Person1 from '../../public/assets/images/Person1.svg';
// import Retail from '../../public/assets/images/story-1.svg';
import Retail from '../../public/assets/images/Bata-Clr.svg';
// import CBTL from '../../public/assets/images/story-2.svg';
import CBTL from '../../public/assets/images/CoffeeBean-Clr.svg';

import Chip from '../Chip';
import PrimaryButton from '../PrimaryButton';
import Connect from '../../public/assets/images/Connect.svg';
import Link from 'next/link';

export default function BusinessCard() {
  return (
    <ProfileWrapper>
      <CardWrapper>
      <CardImg>
        <Image src={Retail} alt='retail' />
      </CardImg>
        <ProfileDetail>
          <ProfileContainer>
            <div>
              <Chip title='Retail' />
            </div>
          </ProfileContainer>

          <ProfileDescription>
            <p>
              Accelerated Loyalty Program Implementation: 6 Countries in 7
              Months
            </p>
          </ProfileDescription>

          <ProfileSubDescription>
            <p>
              Greentern partnered with the brand to design and launch customized
              loyalty program across 6 countries, achieving alignment and launch
              in just 7 months.
            </p>
          </ProfileSubDescription>
        </ProfileDetail>
      </CardWrapper>

      <CardWrapper>
      <CardImg>
        <Image src={CBTL} alt='finance' />
      </CardImg>
        <ProfileDetail>
          <ProfileContainer>
            <div>
              <Chip title='Food & Beverages' width='20rem' />
            </div>
          </ProfileContainer>

          <ProfileDescription>
            <p>CRM & Loyalty Program Success: Execution to Excellence</p>
          </ProfileDescription>

          <ProfileSubDescription>
            <p>
              Overseeing CRM & loyalty program implementation with mobile
              app.Ensuring seamless execution and optimal performance with our
              project management expertise
            </p>
          </ProfileSubDescription>
        </ProfileDetail>
      </CardWrapper>

      <CardWrapper>
        <ProfileDetail>
          <ConnectDetail>
            <div style={{ textAlign: 'center' }}>
              <Image src={Connect} alt='connect' />
            </div>
            <BusinessDescription>
              <p>
                Like to see your <br /> business story here?
              </p>
            </BusinessDescription>

            <div style={{ textAlign: 'center' }}>
              <Link href={'/contact-us'}>
                <PrimaryButton bgHover={false} btnTitle='Let’s catchup now' />
              </Link>
            </div>
          </ConnectDetail>
        </ProfileDetail>
      </CardWrapper>
    </ProfileWrapper>
  );
}
