import {
  Container,
  Section,
  SectionTitle,
  SectionDescription,
} from '../../common/CommonStyle';
import {
  CollapserContainer,
  CustomerWrapper,
  DividerContainer,
  GTImage,
} from './CustomerMgmtStyle';
import GTCollapser from '../../GTCollapser';
import { Divider } from '@/components/CustomerCard/CustomerCardStyle';
import { FooterDivider } from '@/components/Footer/FooterStyle';
import CPM from '../../../public/assets/images/OmniNew.jpg';
import Image from 'next/image';
import CustomCollapse from '@/components/GTCollapser/CustomCollapse';
import { useState } from 'react';
import UpArrow from '../../../public/assets/icons/upArrow.svg';
import DownArrow from '../../../public/assets/icons/downArrow.svg';

const CollpaserContent = [
  {
    id: 1,
    title: 'Improve Customer Engagement',
    description:
      'Integrating customer touchpoints and leveraging marketing automation enables brands to gain a deeper understanding of customer behavior, preferences, and purchasing patterns. This insights-driven approach delivers personalized and timely messages, fostering enhanced engagement, meaningful connections, and ultimately, driving loyalty and revenue',
  },
  {
    id: 2,
    title: 'Optimize Customer Experience',
    description:
      'An omnichannel approach unifies retail and ecommerce channels, providing a seamless and cohesive customer experience. This allows customers to transition smoothly between channels, enjoying a consistent journey from start to finish.',
  },
  {
    id: 3,
    title: 'Boost Customer Retention',
    description:
      ' Implement an omnichannel strategy to prevent customer disengagement. This approach helps brands understand customer preferences and behaviors, enabling personalized interactions that boost retention rates and foster lasting connections.',
  },
  {
    id: 4,
    title: 'Achieve a Competitive Edge',
    description:
      'In a crowded ecommerce and retail space, a distinct brand identity is crucial. An omnichannel strategy allows brands to stand out by delivering personalized experiences tailored to individual preferences and shopping habits.',
  },
];

export default function CustomerManagement() {
  const [activeKey, setActiveKey] = useState(1);

  const handlePanelChange = (key) => {
    setActiveKey(key);
  };

  const customExpandIcon = (panelProps) => {
    const { isActive } = panelProps;
    return <Image src={isActive ? UpArrow : DownArrow} alt='arrow-icon' />;
  };

  return (
    <Section>
      <Container>
        <SectionTitle>Omnichannel Management</SectionTitle>
        <SectionDescription>
          Our experts help you gain a deep understanding of customer
          preferences, enabling personalized engagement at every stage of their
          journey and informing the next best steps to enhance their experience.
        </SectionDescription>
        <CustomerWrapper>
          <CollapserContainer>
            {/* {CollpaserContent.map((data, idx) => {
              return (
                <>
                  <GTCollapser
                    id={data?.id}
                    title={data?.title}
                    description={data?.description}
                  />
                  {idx !== 2 && (
                    <DividerContainer>
                      <FooterDivider />
                    </DividerContainer>
                  )}
                </>
              );
            })} */}
            <CustomCollapse
              customExpandIcon={customExpandIcon}
              activeKey={activeKey}
              handlePanelChange={handlePanelChange}
              id='1'
              title={CollpaserContent[0].title}
              description={CollpaserContent[0].description}
            />

            <CustomCollapse
              customExpandIcon={customExpandIcon}
              activeKey={activeKey}
              handlePanelChange={handlePanelChange}
              id='2'
              title={CollpaserContent[1].title}
              description={CollpaserContent[1].description}
            />

            <CustomCollapse
              customExpandIcon={customExpandIcon}
              activeKey={activeKey}
              handlePanelChange={handlePanelChange}
              id='3'
              title={CollpaserContent[2].title}
              description={CollpaserContent[2].description}
            />

            <CustomCollapse
              customExpandIcon={customExpandIcon}
              activeKey={activeKey}
              handlePanelChange={handlePanelChange}
              id='4'
              title={CollpaserContent[3].title}
              description={CollpaserContent[3].description}
            />
          </CollapserContainer>
          <GTImage>
            <Image src={CPM} alt='cpm-img' unoptimized />
          </GTImage>
        </CustomerWrapper>
      </Container>
    </Section>
  );
}
