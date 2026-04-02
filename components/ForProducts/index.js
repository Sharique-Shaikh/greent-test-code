import Image from 'next/image';
import PrimaryButton from '../PrimaryButton';
import { Container, Section } from '../common/CommonStyle';
import {
  ButtonWrapper,
  ContentSubGrid,
  ContentSubTitle,
  ContentTitle,
  ContentWrapper,
  ForProductGrid,
  HrLine,
  ImageWrapper,
  ProductWrapper,
  SubGridCont,
  SubGridHighlightCont,
} from './ForProductStyle';
import forProductImg from '../../public/assets/images/ProductsGraph.svg';
import { useRouter } from 'next/navigation';

export default function ForProductsComp() {
  const router = useRouter();
  return (
    <Section>
      <ProductWrapper>
        <Container>
          <ForProductGrid>
            <ContentWrapper>
              <ContentTitle>
                Your Go-To-Market and International Expansion partner
              </ContentTitle>
              <ContentSubTitle>
                Establish your footprint in international market faster with
                Greentern. With strong GTM expertise, we operate as an extended
                strategy, sales and marketing arm to deliver global markets
                growth.
              </ContentSubTitle>
              <ButtonWrapper>
                <PrimaryButton
                  onClick={() => router.push('/contact-us')}
                  btnTitle={"Let's catchup now"}
                  btnWidth={'80%'}
                  bgHover={false}
                />
              </ButtonWrapper>
              <HrLine />
              <ContentSubGrid>
                <SubGridCont>
                  <SubGridHighlightCont>
                    5 regional offices{' '}
                  </SubGridHighlightCont>
                  With local team support
                </SubGridCont>
                <SubGridCont>
                  <SubGridHighlightCont>3x faster </SubGridHighlightCont>
                  With 80% savings
                </SubGridCont>
              </ContentSubGrid>
            </ContentWrapper>
            <ImageWrapper>
              <Image src={forProductImg} />
            </ImageWrapper>
          </ForProductGrid>
        </Container>
      </ProductWrapper>
    </Section>
  );
}
