import Image from 'next/image';
import {
  CardContainer,
  CustomerDesignation,
  CustomerName,
  CustomerProfile,
  CustomerReview,
  CustomerReviewTitle,
  Divider,
  ProfileLogo,
} from './CustomerCardStyle';
import Bata from '../../public/assets/images/CustomerLogo.svg';

export default function CustomerCard() {
  return (
    <CardContainer>
      <CustomerProfile>
        <ProfileLogo>
          <Image src={Bata} alt='customer-logo' height={500} width={500} />
        </ProfileLogo>
        {/* <CustomerName>Monisha</CustomerName>
        <CustomerDesignation>
          CEO
          <span>|</span>
          Bata
        </CustomerDesignation> */}
      </CustomerProfile>
      <Divider />
      <div>
        <div>
          <CustomerReviewTitle>
            Our business has grown 5x faster{' '}
          </CustomerReviewTitle>
        </div>
        <div>
          <CustomerReview>
            Wegrow has been a game-changer for DeluPay. They provide a unique
            mix of creativity, fast delivery and crystal clear communications.
          </CustomerReview>
        </div>
      </div>
    </CardContainer>
  );
}
