import { Container, Section, SectionTitle } from '../common/CommonStyle';
import React from 'react';
import {
  ChefData,
  ChefsContainer,
  ChefName,
  BlogData,
  BlogsImage,
  BlogTitle,
  BlogSubTitle,
  BlogWrapper,
} from './BlogsStyle';
import { BlogsData, ChefsData } from './BlogsData';

export default function Blogs() {
  return (
    <Section>
      <Container>
        <SectionTitle>News & Blogs</SectionTitle>
        <ChefsContainer>
          {BlogsData.map((data) => {
            return (
              <BlogWrapper>
                <BlogsImage src={data.image} alt='blog' />
                <BlogData key={data.id}>
                  <BlogTitle>{data.title}</BlogTitle>
                  <BlogSubTitle>{data.subTitle}</BlogSubTitle>
                </BlogData>
              </BlogWrapper>
            );
          })}
        </ChefsContainer>
      </Container>
    </Section>
  );
}
