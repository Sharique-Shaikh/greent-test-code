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

import Asics from '../../public/assets/images/Asics-clr.svg';
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
import KKMart from '../../public/assets/images/KK-Supermart-Logo-Vector.svg-.png';
import RedManShop from '../../public/assets/images/redmanshop+logo.webp';
import SitiKhadijah from '../../public/assets/images/Siti-Khadijah.webp';
import MRDiy from '../../public/assets/images/MR.DIY-logo.svg';
import PandG from '../../public/assets/images/P&G_logo.png';

import easyRewardz from '../../public/assets/images/ER-Clr.svg';
import Jollibee from '../../public/assets/images/Jollie-Clr.svg';

import PhoonHuat from '../../public/assets/images/Phoon-Huat.png';
import OnitsukaTiger from '../../public/assets/images/Onitsuka-Tiger.png';
import MAP from '../../public/assets/images/MAP.png';
import MarieClaire from '../../public/assets/images/Marie-Claire.png';
import DominosPizza from '../../public/assets/images/Dominos-Pizza.png';
import Matahari from '../../public/assets/images/Matahari.png';
import LandmarkGroup from '../../public/assets/images/Landmark-Group.png';
import AscensusHealth from '../../public/assets/images/Ascensus-Health.png';
import TheGuardians from '../../public/assets/images/The-Guardians.png';
import Realtors360 from '../../public/assets/images/360-Realtors.png';
import FivePaisa from '../../public/assets/images/5Paisa.png';
import Ceyone from '../../public/assets/images/Ceyone.png';

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
  {
    id: 9,
    imageSrc: Merchant,
  },
  {
    id: 10,
    imageSrc: Primer,
  },
  {
    id: 11,
    imageSrc: Hush,
  },
  {
    id: 12,
    imageSrc: Ruparel,
  },
  {
    id: 13,
    imageSrc: KKMart,
  },
  {
    id: 14,
    imageSrc: SitiKhadijah,
  },
  {
    id: 15,
    imageSrc: MRDiy,
  },
  {
    id: 16,
    imageSrc: PhoonHuat,
  },
  {
    id: 17,
    imageSrc: OnitsukaTiger,
  },
  {
    id: 18,
    imageSrc: MAP,
  },
  {
    id: 19,
    imageSrc: MarieClaire,
  },
  {
    id: 20,
    imageSrc: DominosPizza,
  },
  {
    id: 21,
    imageSrc: Matahari,
  },
  {
    id: 22,
    imageSrc: LandmarkGroup,
  },
  {
    id: 23,
    imageSrc: Nippon,
  },
  {
    id: 24,
    imageSrc: AscensusHealth,
  },
  {
    id: 25,
    imageSrc: TheGuardians,
  },
  {
    id: 26,
    imageSrc: Realtors360,
  },
  {
    id: 27,
    imageSrc: FivePaisa,
  },
  {
    id: 28,
    imageSrc: Ceyone,
  },
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
      <Section  >
        <Container>
          <SectionTitle>Clients who trust us</SectionTitle>

          {/* <SectionDescription>
            Here's a long list of customers who have worked with us
          </SectionDescription> */}

          <BrandWrapper>
            {/* <BrandContainer style={{animationDuration: brandImages.length * 2 + 20 + 's'}}> */}
            <BrandContainer>
              {/* {[...brandImages, ...brandImages].map((brand, index) => ( */}
              {brandImages.map((brand, index) => (
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
                </Container>
      </Section>
    </>
  );
}
