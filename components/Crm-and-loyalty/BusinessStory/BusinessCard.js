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
} from './BusinessStoryStyle';
import Person1 from '../../public/assets/images/Person1.svg';
import Finance from '../../public/assets/images/Finance.svg';
import Chip from '../Chip';
import PrimaryButton from '../PrimaryButton';
import Connect from '../../public/assets/images/Connect.svg';

export default function BusinessCard() {
  return (
    <ProfileWrapper>
      <CardWrapper>
        <Image src={Finance} alt='finance' />
        <ProfileDetail>
          <ProfileContainer>
            <div>
              <Chip title='Finance' />
            </div>
          </ProfileContainer>

          <ProfileDescription>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </ProfileDescription>

          <ProfileSubDescription>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nulla pellentesque quam
              Lorem ipsum dolor sit amet consectetur. Nulla pellentesque quam
            </p>
          </ProfileSubDescription>
        </ProfileDetail>
      </CardWrapper>

      <CardWrapper>
        <Image src={Finance} alt='finance' />
        <ProfileDetail>
          <ProfileContainer>
            <div>
              <Chip title='Finance' />
            </div>
          </ProfileContainer>

          <ProfileDescription>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </ProfileDescription>

          <ProfileSubDescription>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nulla pellentesque quam
              Lorem ipsum dolor sit amet consectetur. Nulla pellentesque quam
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
              <PrimaryButton btnTitle='Let’s catchup now' />
            </div>
          </ConnectDetail>
        </ProfileDetail>
      </CardWrapper>
    </ProfileWrapper>
  );
}
