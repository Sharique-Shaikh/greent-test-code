import React from 'react';
import indianFlag from '../../public/assets/images/indianFlag.svg';
import philipinesFlag from '../../public/assets/images/philipinesFlag.svg';
import malaysiaFlag from '../../public/assets/images/malaysiaFlag.svg';
import indonesiaFlag from '../../public/assets/images/indonesiaFlag.svg';
import uaeFlag from '../../public/assets/images/uaeFlag.svg';
import usaFlag from '../../public/assets/images/usaFlag.svg';
import {
  CountryItemWrapper,
  CountryTitle,
  CountryWrapper,
} from './SolutionCountriesStyle';
import Image from 'next/image';

const countryFlagData = [
  {
    image: indianFlag,
    title: 'India',
  },
  {
    image: philipinesFlag,
    title: 'Philipines',
  },
  {
    image: malaysiaFlag,
    title: 'Malaysia',
  },
  {
    image: indonesiaFlag,
    title: 'Indonesia',
  },
  {
    image: uaeFlag,
    title: 'UAE',
  },
  {
    image: usaFlag,
    title: 'USA',
  },
  {
    image: indianFlag,
    title: 'India',
  },
  {
    image: philipinesFlag,
    title: 'Philipines',
  },
  {
    image: malaysiaFlag,
    title: 'Malaysia',
  },
  {
    image: indonesiaFlag,
    title: 'Indonesia',
  },
  {
    image: philipinesFlag,
    title: 'UAE',
  },
  {
    image: usaFlag,
    title: 'USA',
  },
];

export default function SolutionCountries({ mb = 0 }) {
  return (
    <CountryWrapper mb={mb}>
      {countryFlagData?.map((item) => {
        return (
          <>
            <CountryItemWrapper>
              <Image src={item?.image} width={30} height={20} />
              <CountryTitle>{item?.title}</CountryTitle>
            </CountryItemWrapper>
          </>
        );
      })}
    </CountryWrapper>
  );
}
