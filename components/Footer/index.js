import { Container, Section } from '../common/CommonStyle';
import React from 'react';
import Image from 'next/image';
import {
  CopyRightContainer,
  CopyrightText,
  FooterContact,
  FooterContainer,
  FooterContent,
  FooterContentHeader,
  FooterContentSubHeader,
  FooterDiv,
  FooterDivider,
  FooterIcon,
  FooterImage,
  FooterImgContainer,
  FooterLink,
  FooterLinks,
  FooterLogoLink,
  FooterLogos,
  FooterNavLink,
  FooterNavLinkTitle,
  FooterSpanDot,
  FooterText,
  FooterTextContent,
  FooterTitle,
  Wrapper,
} from './FooterStyle';
// import Logo from '../../public/assets/images/FooterLogo.svg';
import Logo from '../../public/assets/images/Greentern-Logo.png';
import LinkedIn from '../../public/assets/images/Linkedin.svg';
import Facebook from '../../public/assets/images/Facebook.svg';
import Instagram from '../../public/assets/images/Instagram.svg';
import Whatsapp from '../../public/assets/images/whatsapp.svg';
import Google from '../../public/assets/images/google.svg';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Footer
export default function Footer() {
  const router = useRouter();
  return (
    <>
      <Wrapper>
        <Container>
          <FooterImgContainer>
            <FooterImage src={Logo} alt='logo' height={180} width={180} />
          </FooterImgContainer>

          <FooterContainer>
            <FooterDiv>
              <FooterContent>
                <FooterContentHeader>Singapore Office</FooterContentHeader>

                <FooterContentSubHeader>
                  Greentern Consulting Pte Ltd
                </FooterContentSubHeader>

                <FooterTextContent>
                  <FooterText>A3, Shenton Wy, #19-02,</FooterText>

                  <FooterText>Shenton House,</FooterText>

                  <FooterText>Singapore - 068805 </FooterText>
                </FooterTextContent>

                <FooterContact>
                  <FooterText>Phone no: +65 9050 2059</FooterText>
                  <FooterText> Email : sales@thegreentern.com</FooterText>
                </FooterContact>
              </FooterContent>
            </FooterDiv>

            {/* <FooterDiv>
              <FooterContent>
                <FooterContentHeader>India Office</FooterContentHeader>

                <FooterContentSubHeader>
                  Greentern Technologies Pvt Ltd
                </FooterContentSubHeader>

                <FooterTextContent>
                  <FooterText>
                    Bizzhub (Aspire), 1st floor Sony World Signal,
                  </FooterText>

                  <FooterText>100 Feet Rd, Koramangala,</FooterText>

                  <FooterText>Bengaluru, Karnataka 560095</FooterText>
                </FooterTextContent>

                <FooterContact>
                  <FooterText>Phone no: +91 91371 85268</FooterText>
                  <FooterText> Email : arun@thegreentern.com</FooterText>
                </FooterContact>
              </FooterContent>
            </FooterDiv> */}

            <FooterContent>
              <FooterLinks>
                <FooterLink>
                  <FooterNavLink href='/solutions'>Solutions</FooterNavLink>
                </FooterLink>

                <FooterLink>
                  <FooterNavLink href='/crm-and-loyalty'>
                    CRM & Loyalty
                  </FooterNavLink>
                </FooterLink>
                {/* <FooterLink>
                  <FooterNavLink href='/for-products'>Products</FooterNavLink>
                </FooterLink> */}
                <FooterLink>
                  <FooterNavLink href='/privacy-policy'>
                    Privacy Policy
                  </FooterNavLink>
                </FooterLink>
              </FooterLinks>
            </FooterContent>

            <FooterContent>
              <FooterLinks>
                <FooterLink>
                  <FooterNavLink href='/about-us'>About Us</FooterNavLink>
                </FooterLink>

                {/* <FooterLink>
                  <FooterNavLink href='/'>Blog</FooterNavLink>
                </FooterLink> */}

                {/* <FooterLink>
                  <FooterNavLink href='/'>Resources</FooterNavLink>
                </FooterLink> */}

                <FooterLink>
                  <FooterNavLink href='/contact-us'>Contact Us</FooterNavLink>
                </FooterLink>

              </FooterLinks>
            </FooterContent>
          </FooterContainer>

          <FooterContainer>
            <FooterLogos>
              <Link
                href={'https://www.linkedin.com/company/greentern/'}
                target='_blank'
              >
                <FooterIcon>
                  <Image
                    src={LinkedIn}
                    alt='linked-in'
                    height={50}
                    width={50}
                  />
                </FooterIcon>
              </Link>

              <Link href={'https://wa.me/6590502059'} target='_blank'>
                <FooterIcon>
                  <Image src={Whatsapp} alt='whatsapp' height={50} width={50} />
                </FooterIcon>
              </Link>

              <Link href={'https://g.co/kgs/qBkvbxm'} target='_blank'>
                <FooterIcon>
                  <Image src={Google} alt='google' height={50} width={50} />
                </FooterIcon>
              </Link>
            </FooterLogos>
          </FooterContainer>
        </Container>
        <FooterDivider />
        <Container>
          <CopyRightContainer>
            <CopyrightText>
              Copyright © 2024 Greentern Consulting Pte Ltd. All rights
              reserved.
            </CopyrightText>
          </CopyRightContainer>
        </Container>
      </Wrapper>
    </>
  );
}
