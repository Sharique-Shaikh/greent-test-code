'use client';

import DigitalEnablement from '@/components/DigitalEnablement';
import Solutions from '../../components/Solutions';
import SolutionContact from '@/components/SolutionContact';
import SolutionProject from '@/components/SolutionProjectManagement';
import SassSolution from '../../components/SassSolution';
import SolutionTechnology from '@/components/SolutionTechnology';

export default function SolutionLayout() {
  return (
    <>
      <Solutions />
      <DigitalEnablement />
      <SolutionContact />
      <SassSolution />
      <SolutionProject />
      <SolutionTechnology />
    </>
  );
}
