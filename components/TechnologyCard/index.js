import {
  TechCard,
  TechCardWrapper,
  Title,
  Description,
} from './TechnologyCardStyle';
const techCardData = [
  {
    id: 1,
    title: 'Resource Augmentation',
    description:
      'Accelerate your software development and bridge tech gaps with our resource augmentation models. We help you quickly extend your team, build specific expertise, and speed up product development, ensuring faster time-to-market and greater success.',
  },
  {
    id: 2,
    title: 'Full-circle approach',
    description:
      'We provide end-to-end software solutions, from idea to launch and beyond, using customized frameworks that cover design, integration, management, and ongoing support, ensuring a seamless and successful software lifecycle.',
  },
  {
    id: 3,
    title: 'Domain Expertise',
    description:
      'We bring deep expertise in niche technologies, covering solution architecture to project troubleshooting, ensuring comprehensive support and guidance.',
  },
  {
    id: 4,
    title: 'Speed to launch',
    description:
      'Leveraging our expert capabilities and solution accelerators, we facilitate rapid product launch, swift customizations, and seamless delivery, resulting in lower development costs and faster time-to-market, enabling you to quickly gain a competitive edge.',
  },
];
export default function TechnologyCard() {
  return (
    <TechCardWrapper>
      {techCardData?.map((card) => (
        <TechCard>
          <Title>{card.title}</Title>
          <Description>{card.description}</Description>
        </TechCard>
      ))}
    </TechCardWrapper>
  );
}
