import React, { useRef, useState } from 'react';
import {
  ArrowWrapper,
  CardContent,
  CardPercent,
  CardPercentWrap,
  CardTitle,
  ContentWrapper,
  ImageContainer,
  ProductCardWrap,
  ProductSuccessContainer,
  ProductContentWrap,
  VerticalLine,
  SmallVerticalLine,
} from './ProductSuccessStoriesStyle';
import bata from '../../public/assets/images/bata.svg';
import nipponPaint from '../../public/assets/images/nipponPaint.svg';
import Image from 'next/image';
import successLeftArrow from '../../public/assets/images/successLeftArrow.svg';
import successRightArrow from '../../public/assets/images/successRightArrow.svg';
import jolliBee from '../../public/assets/images/jollybee.svg';
import unicef from '../../public/assets/images/unicef.svg';
import kotak from '../../public/assets/images/kotak.svg';
import asis from '../../public/assets/images/asis.svg';

const ProductSuccessCard = () => {
  const containerRef = useRef(null);

  const productCard = [
    {
      title: 'Our business has grown 5x faster ',
      content:
        'Wegrow has been a game-changer for DeluPay. They provide a unique mix of creativity, fast delivery and crystal clear communications.',
      rating: '17%',
      efficiency: '20%',
      image: bata,
    },
    {
      title: 'Our business has grown 5x faster ',
      content:
        'Wegrow has been a game-changer for DeluPay. They provide a unique mix of creativity, fast delivery and crystal clear communications.',
      rating: '17%',
      efficiency: '20%',
      image: nipponPaint,
    },
    {
      title: 'Our business has grown 5x faster ',
      content:
        'Wegrow has been a game-changer for DeluPay. They provide a unique mix of creativity, fast delivery and crystal clear communications.',
      rating: '17%',
      efficiency: '20%',
      image: jolliBee,
    },
    {
      title: 'Our business has grown 5x faster ',
      content:
        'Wegrow has been a game-changer for DeluPay. They provide a unique mix of creativity, fast delivery and crystal clear communications.',
      rating: '17%',
      efficiency: '20%',
      image: unicef,
    },
    {
      title: 'Our business has grown 5x faster ',
      content:
        'Wegrow has been a game-changer for DeluPay. They provide a unique mix of creativity, fast delivery and crystal clear communications.',
      rating: '17%',
      efficiency: '20%',
      image: kotak,
    },
    {
      title: 'Our business has grown 5x faster ',
      content:
        'Wegrow has been a game-changer for DeluPay. They provide a unique mix of creativity, fast delivery and crystal clear communications.',
      rating: '17%',
      efficiency: '20%',
      image: asis,
    },
  ];

  const handlePrevClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -700, behavior: 'smooth' });
    }
  };

  const handleNextClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 700, behavior: 'smooth' });
    }
  };

  return (
    <>
      <ProductSuccessContainer ref={containerRef}>
        {productCard.map((item, index) => (
          <ProductCardWrap key={index}>
            <ProductContentWrap>
              <ImageContainer>
                <Image src={item?.image} alt={item?.title} />
              </ImageContainer>
              <VerticalLine />
              <ContentWrapper>
                <CardTitle>{item?.title}</CardTitle>
                <CardContent>{item?.content}</CardContent>
                <CardPercentWrap>
                  <CardPercent>{`${item?.rating} Rating Increased`}</CardPercent>
                  <SmallVerticalLine />
                  <CardPercent>{`${item?.efficiency} Efficiency`}</CardPercent>
                </CardPercentWrap>
              </ContentWrapper>
            </ProductContentWrap>
          </ProductCardWrap>
        ))}
      </ProductSuccessContainer>
      <ArrowWrapper>
        <Image
          src={successLeftArrow}
          alt='Previous'
          onClick={handlePrevClick}
          style={{ cursor: 'pointer' }}
        />
        <Image
          src={successRightArrow}
          alt='Next'
          onClick={handleNextClick}
          style={{ cursor: 'pointer' }}
        />
      </ArrowWrapper>
    </>
  );
};

export default ProductSuccessCard;
