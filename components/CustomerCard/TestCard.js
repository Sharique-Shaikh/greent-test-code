import Image from 'next/image';
import {
  TestCardContainer,
  TestCustomerName,
  TestCustomerProfile,
  TestCustomerReview,
  TestProfileLogo,
} from './TestCardStyle';
import LocateLogo from '../../public/assets/images/LocationLogo.svg';

export default function TestCard() {
  return (
    <TestCardContainer>
      <TestCustomerProfile>
        <TestProfileLogo>
          <Image
            src={LocateLogo}
            alt='customer-logo'
            height={100}
            width={100}
          />
        </TestProfileLogo>
        <TestCustomerName>Monisha</TestCustomerName>
      </TestCustomerProfile>

      <TestCustomerReview>
        We grow has been a game-changer for DeluPay. They provide a unique mix
        of creativity, fast delivery and crystal clear communications. Love the
        process, love the collaboration, love the output
      </TestCustomerReview>
    </TestCardContainer>
  );
}
