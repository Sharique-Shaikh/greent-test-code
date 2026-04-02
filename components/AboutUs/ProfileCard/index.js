import { Container, Section, SectionTitle } from '../../common/CommonStyle';
import React, { useState } from 'react';
import {
  ChefsContainer,
  BlogData,
  BlogsImage,
  BlogTitle,
  BlogSubTitle,
  BlogWrapper,
  Divider,
  ProfileSocialWrapper,
  ProfileDesc,
  FooterIcon,
} from './ProfileCardStyle';
import { ProfileData } from './ProfileData';
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';

export default function Blogs() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <Section>
      <Container>
        <SectionTitle>Meet the creative minds behind our success.</SectionTitle>
        <ChefsContainer>
          {ProfileData.map((data, index) => (
            <BlogWrapper key={data.id} onMouseLeave={handleMouseLeave}>
              <>
                <BlogsImage
                  src={data.image}
                  alt='blog'
                  onMouseMove={() => handleMouseEnter(index)}
                  show={hoveredIndex === index}
                />
                <ProfileSocialWrapper show={hoveredIndex === index}>
                  <FooterIcon>
                    <FaTwitter />
                  </FooterIcon>

                  <FooterIcon>
                    <FaInstagram />
                  </FooterIcon>

                  <FooterIcon>
                    <FaLinkedin />
                  </FooterIcon>
                </ProfileSocialWrapper>
              </>
              <BlogData>
                <BlogTitle>{data.title}</BlogTitle>
                <BlogSubTitle>{data.subTitle}</BlogSubTitle>
                <Divider />
                <ProfileDesc>{data.description}</ProfileDesc>
              </BlogData>
            </BlogWrapper>
          ))}
        </ChefsContainer>
      </Container>
    </Section>
  );
}
