'use client';

import WhyGreentern from '@/components/WhyGreentern';
import AboutUsComp from '../../components/AboutUsComp';
import ClientAboutUs from '../../components/ClientAboutUs';
import ClientCore from '../../components/ClientCore';
import ClientTeam from '@/components/ClientTeam';
import ClientFolks from '../../components/ClientFolks'; 

export default function AboutLayout() {
  return (
    <>
      
      <AboutUsComp />
      <ClientAboutUs />
      <ClientCore />
      <ClientFolks />
      <ClientTeam />
    </>
  );
}
