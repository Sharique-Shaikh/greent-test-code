import Image from 'next/image';
import {
  Card,
  CardContainer,
  CardSubcontent,
  CardTitle,
  ImageContainer,
} from './ProductWhatWeDoStyle';
import productSideImg from '../../public/assets/images/productSideImg.svg';

const cardsData = [
  {
    id: 1,
    title: 'Specialized SaaS Expertise',
    subContent:
      'Our team comprises seasoned professionals with extensive experience in the SaaS industry. We understand the unique challenges and opportunities that SaaS companies face, and we tailor our strategies to suit your specific needs.',
  },
  {
    id: 2,
    title: 'Proven Track Record',
    subContent:
      'We have a track record of delivering remarkable results for SaaS companies, helping them scale, optimize their sales processes, and achieve impressive revenue growth.',
  },
  {
    id: 3,
    title: 'Custom-Tailored Solutions',
    subContent:
      'We understand that each SaaS company is unique. Our consulting solutions are bespoke, designed to align with your business goals and accelerate your success.',
  },
  {
    id: 4,
    title: 'Data-Driven Approach',
    subContent:
      'Our strategies are rooted in data and market insights. We leverage the power of analytics to make informed decisions that drive real business outcomes.',
  },
];

export default function ProductCard() {
  return (
    <CardContainer>
      {cardsData?.map((card, index) => (
        <Card key={card?.id} index={index + 1}>
          {index % 2 === 1 && (
            <ImageContainer index={index + 1}>
              <Image src={productSideImg} alt='' />
            </ImageContainer>
          )}
          <CardTitle index={index + 1}>{card?.title}</CardTitle>
          <CardSubcontent index={index + 1}>{card?.subContent}</CardSubcontent>
        </Card>
      ))}
    </CardContainer>
  );
}
