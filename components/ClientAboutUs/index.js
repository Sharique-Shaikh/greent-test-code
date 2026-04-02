import {
  Container,
  Section,
  SectionDescription,
  SectionTitle,
} from '../common/CommonStyle';

import Mitralo from '../../public/assets/images/Mitra-Clr.svg';

import Asics from '../../public/assets/images/Asics-Clr.svg';
import Bata from '../../public/assets/images/Bata-Clr.svg';
import Bean from '../../public/assets/images/CoffeeBean-Clr.svg';
import Kotak from '../../public/assets/images/Kotak-Clr.svg';
import Nippon from '../../public/assets/images/Nippon-Clr.svg';
import Unicef from '../../public/assets/images/Unicef-Clr.svg';
import Increff from '../../public/assets/images/Increff-Clr.svg';
import easyRewardz from '../../public/assets/images/ER-Clr.svg';

import Sobha from '../../public/assets/images/Sobha.webp';
import Primer from '../../public/assets/images/Primer.webp';
import Merchant from '../../public/assets/images/Merchant.jpg';
import Ruparel from '../../public/assets/images/Ruparel.jpg';

import Jollibee from '../../public/assets/images/Jollie-Clr.svg';

import {
  BrandContainer,
  BrandImage,
  BrandImageWrapper,
  BrandWrapper,
} from './ClientAboutUsStyle';
import TrustBy from '../TrustBy';

const brandImages = [
  {
    id: 1,
    imageSrc: Unicef,
  },
  {
    id: 2,
    imageSrc: Mitralo,
  },
  {
    id: 3,
    imageSrc: Bata,
  },
  {
    id: 4,
    imageSrc: Bean,
  },
  {
    id: 5,
    imageSrc: Jollibee,
  },

  {
    id: 6,
    imageSrc: Kotak,
  },

  {
    id: 7,
    imageSrc: Sobha,
  },

  {
    id: 8,
    imageSrc: Asics,
  },

  { id: 9, imageSrc: Merchant },
  { id: 10, imageSrc: Ruparel },

  { id: 11, imageSrc: Primer },
  { id: 12, imageSrc: Asics },
];

const getStyle = (index) => {
  return {
    height: index === 6 || index === 10 ? '85px' : '50px',
  };
};

// export default function ClientAboutUs() {
//   return (
//     <Section>
//       <Container>
//         <SectionTitle>Clients who trust us</SectionTitle>
//         {/* <SectionDescription>
//           Here's a long list of customers who have worked with us
//         </SectionDescription> */}

//         <BrandWrapper>
//           <BrandContainer>
//             {brandImages?.map((brand, index) => (
//               <BrandImageWrapper>
//                 <BrandImage
//                   key={index}
//                   src={brand.imageSrc}
//                   alt={brand.altText}
//                   style={getStyle(index)}
//                   unoptimized
//                 />
//               </BrandImageWrapper>
//             ))}
//           </BrandContainer>
//         </BrandWrapper>
//       </Container>
//     </Section>
//   );
// }

export default function ClientAboutUs() {
  return <TrustBy />;
}
