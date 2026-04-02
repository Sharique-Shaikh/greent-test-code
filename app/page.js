'use client';
import CaseStudy from '@/components/CaseStudy';
import Chefs from '@/components/Blogs';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import KnowHow from '@/components/KnowHow';
import PartnerWithUs from '@/components/PartnerWithUs';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { lightTheme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import Blogs from '@/components/Blogs';
import Intermediate from '@/components/Intermediate';
import TrustBy from '@/components/TrustBy';
import OurPractices from '@/components/OurPractices';
import Metrics from '@/components/Metrics';
import Statistics from '@/components/Statistics';
import Team from '@/components/Team';
import BusinessStory from '@/components/BusinessStory';
import BusinessSolutions from '@/components/BusinessSolutions';
import Partners from '@/components/Partners';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBy />
      <OurPractices />
      <Metrics />
      <Statistics />
      <Team />
      <BusinessStory />
      {/* <Partners /> */}
      <BusinessSolutions />
      {/* <PartnerWithUs />
      <KnowHow />
      <CaseStudy />
       <Intermediate />
          <Blogs />
      */}
    </>
  );
}
