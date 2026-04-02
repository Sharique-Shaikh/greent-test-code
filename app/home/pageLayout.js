'use client';
import CaseStudy from '@/components/CaseStudy';
import Hero from '@/components/HeroHome';
import KnowHow from '@/components/KnowHow';
import PartnerWithUs from '@/components/PartnerWithUs';
import Blogs from '@/components/Blogs';
import Intermediate from '@/components/Intermediate';

// This component having diff background image - added for demo purpose
export default function HomeLayout() {
  return (
    <>
      <Hero />
      <PartnerWithUs />
      <KnowHow />
      <CaseStudy />
      <Blogs />
      <Intermediate />
    </>
  );
}
