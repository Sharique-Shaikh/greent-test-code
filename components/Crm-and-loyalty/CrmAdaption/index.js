import {
  Container,
  Section,
  SectionTitle,
} from '@/components/common/CommonStyle';
import {
  CrmContent,
  CrmGrid,
  CrmHeading,
  CrmImage,
  CrmImageContent,
  CrmImageWrapper,
  CrmText,
  CrmTextWrapper,
  ProgressBar,
  ProgressBarWrapper,
} from './CrmAdaptionStyle';
import PartnerLogo from '../../../public/assets/images/Instruction.jpeg';
import Crm1 from '../../../public/assets/images/Crm2.jpeg';

import Cloud from '../../../public/assets/images/cloud.jpeg';
import Server from '../../../public/assets/images/server.jpeg';

import ProductService from '../../../public/assets/images/product-service.jpeg';
import BusinessMeet from '../../../public/assets/images/business-meet.jpeg';
import BusinessPlan from '../../../public/assets/images/business-plan.jpeg';

import { useEffect, useState } from 'react';

export default function CrmAdaption() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      heading: 'Discovery',
      text: 'Gain insights into the brand, consumer, context, and current challenges through an in-depth discovery module',
      image: ProductService,
    },
    {
      heading: 'Define',
      text: 'Formulate the appropriate strategy, product, program, and campaign approach.',
      image: BusinessPlan,
    },
    {
      heading: 'Phasing & Tech Architechture',
      text: 'Implementing a gradual organic launch of the Loyalty Program: following our Loyalty program framework including tech stack architecture, RFP processes, and adoption strategies.',
      image: PartnerLogo,
    },
    {
      heading: 'Project Delivery',
      text: 'Comprehensive implementation plan with an appropriate project and program management strategy.',
      image: BusinessMeet,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        if (currentStep < steps.length - 1) {
          setProgress(0);
          setCurrentStep((prevStep) => prevStep + 1);
        } else {
          setProgress(0); // Reset progress to 0
          setCurrentStep(0);
        }
      }
    }, 30); // Adjust the interval according to your needs

    return () => clearInterval(interval);
  }, [progress, currentStep, steps]);

  return (
    <Section>
      <Container>
        <SectionTitle>
          So how do we simplify CRM & Loyalty adoption for you?
        </SectionTitle>

        <CrmGrid>
          <CrmImageWrapper>
            <CrmImage src={steps[currentStep].image} />
          </CrmImageWrapper>

          <CrmImageContent>
            {steps.map((step, index) => (
              <CrmContent key={index}>
                <CrmHeading>{step.heading}</CrmHeading>
                <CrmTextWrapper>
                  <CrmText>{step.text}</CrmText>
                </CrmTextWrapper>
                <ProgressBarWrapper>
                  <ProgressBar
                    style={{
                      width: `${index === currentStep ? progress : 0}%`,
                    }}
                  />
                </ProgressBarWrapper>
              </CrmContent>
            ))}
          </CrmImageContent>
        </CrmGrid>
      </Container>
    </Section>
  );
}
