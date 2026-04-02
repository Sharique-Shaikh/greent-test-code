import Image from 'next/image';
import {
  CardContent,
  CardTitle,
  MarketCard,
  MarketCardWrapper,
} from './ProductGoToMarketStyle';
import expansionImg from '../../public/assets/images/expansionImg.svg';
import gapImg from '../../public/assets/images/gapImg.svg';
import strategyImg from '../../public/assets/images/strategyImg.svg';
import swiftImg from '../../public/assets/images/swiftImg.svg';

const cardDetails = [
  {
    title: 'Thorough Expansion',
    image: expansionImg,
    content:
      'Examine market opportunities meticulously, delving deeply into individual accounts and product levels.',
    isExpansion: true,
  },
  {
    title: 'Gap Analysis',
    image: gapImg,
    content:
      'Pinpoint the disparities that exist between market opportunities and your resource allocation model.',
  },
  {
    title: 'Defined Strategy',
    image: strategyImg,
    content:
      'Create a structured plan that harmonizes your sales team with market opportunities and conduct trial runs to assess critical adjustments.',
  },
  {
    title: 'Swift Outcomes',
    image: swiftImg,
    content:
      'Implement decisive actions that secure immediate victories across regions, product lines, and key customer segments.',
  },
];

export default function GoMarketCard() {
  return (
    <MarketCardWrapper>
      {cardDetails?.map((item) => {
        return (
          <MarketCard>
            <Image src={item?.image} alt='' style={{ paddingTop: '8px' }} />
            <CardTitle>{item?.title}</CardTitle>
            <CardContent>{item?.content}</CardContent>
          </MarketCard>
        );
      })}
    </MarketCardWrapper>
  );
}
