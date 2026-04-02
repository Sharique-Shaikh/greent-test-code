import {
  Container,
  GlobalWrapper,
  Section,
  SectionDescription,
  SectionTitle,
} from '../common/CommonStyle';
import {
  BrandContainer,
  BrandImage,
  BrandImageWrapper,
  TrustByWrapper,
  BrandWrapper,
  BrandDescription,
  HighLightBrand,
} from './TrustByStyle';
import Logo from '../../public/assets/images/Logo.svg';
import Clientele from '../../public/assets/images/Clientele.svg';
import Mitralo from '../../public/assets/images/Mitra-Clr.svg';

import Asics from '../../public/assets/images/Asics-Clr.svg';
import Bata from '../../public/assets/images/Bata-Clr.svg';
import Bean from '../../public/assets/images/CoffeeBean-Clr.svg';
import Kotak from '../../public/assets/images/Kotak-Clr.svg';
import Nippon from '../../public/assets/images/Nippon-Clr.svg';
import Unicef from '../../public/assets/images/Unicef-Clr.svg';
import Increff from '../../public/assets/images/Increff-Clr.svg';
import Sobha from '../../public/assets/images/sobha.jpg';
import Primer from '../../public/assets/images/Primer.webp';
import Merchant from '../../public/assets/images/Merchant.jpg';
import Ruparel from '../../public/assets/images/Ruparel.jpg';
import Hush from '../../public/assets/images/HushPuppy.png';

import easyRewardz from '../../public/assets/images/ER-Clr.svg';

import Jollibee from '../../public/assets/images/Jollie-Clr.svg';

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

  { id: 10, imageSrc: Primer },
  { id: 11, imageSrc: Hush },
  { id: 12, imageSrc: Ruparel },
];

const getStyle = (index) => {
  return {
    height: index === 6 || index === 10 ? '85px' : '50px',
  };
};

const getHushStyle = (id) => {
  return {
    height: id === 5 || id === 7 || id === 10 ? '75px' : '60px',
    width: '190px',
  };
};

export default function TrustBy() {
  return (
    <>
      <Section>
        <Container>
          <SectionTitle>Clients who trust us</SectionTitle>
        </Container>

          {/* <SectionDescription>
            Here's a long list of customers who have worked with us
          </SectionDescription> */}

          <BrandWrapper>
            <BrandContainer style={{animationDuration: brandImages.length * 2 + 20 + 's'}}>
              {[...brandImages, ...brandImages].map((brand, index) => (
                <BrandImageWrapper>
                  {' '}
                  <BrandImage
                    key={index}
                    src={brand.imageSrc}
                    alt={brand.altText}
                    style={
                      brand.id === 11 ||
                      brand.id === 5 ||
                      brand.id === 7 ||
                      brand.id === 10
                        ? getHushStyle(brand.id)
                        : getStyle(index)
                    }
                    unoptimized
                  />
                </BrandImageWrapper>
              ))}
            </BrandContainer>
          </BrandWrapper>
      </Section>
    </>
  );
}
