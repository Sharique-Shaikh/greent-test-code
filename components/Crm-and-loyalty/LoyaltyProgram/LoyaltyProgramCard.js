import {
  LoyaltyCardContainer,
  LpcDescription,
  LpcIcon,
  LpcTitle,
} from './LoyaltyProgramCardStyle';
import Image from 'next/image';

export default function LoyaltyProgramCard({
  data: { imgData, title, subTitle },
}) {
  return (
    <LoyaltyCardContainer>
      <LpcIcon>
        <Image src={imgData} alt='lpc-icon' />
      </LpcIcon>

      <LpcTitle>{title}</LpcTitle>

      <LpcDescription>
        <p>{subTitle}</p>
      </LpcDescription>
    </LoyaltyCardContainer>
  );
}
