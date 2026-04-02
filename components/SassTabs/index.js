import {
  PracticeTabContainer,
  PracticeTabWrapper,
  TabBreaker,
  TabContent,
  TabContentDescription,
  TabContentTitle,
  TabContentWrapper,
  TabHighLightContent,
  TabImage,
  TabLeft,
  TabRight,
  TabTitle,
  TabWrapper,
  Tabs,
  TabsContainer,
} from './SassTabsStyle';
import TabImg1 from '../../public/assets/images/tailored-solution.svg';
import TabImg2 from '../../public/assets/images/product-pricing.svg';
import TabImg3 from '../../public/assets/images/pricing-visiblity.svg';
import TabImg4 from '../../public/assets/images/rigorous-evaluation.svg';
import { useState } from 'react';

const TabsData = [
  {
    id: 1,
    tabTitle: 'Tailored Solution',
    tabContentTitle: 'Tailored Solution',
    tabDescription:
      'Leverage our product knowledge and consulting experience to get connected with the best customer experience SaaS solutions.',
    tabHighlightContent:
      'Seeking operational efficiency, higher satisfaction, or enhanced digital presence?',
    tabDescription2:
      "Seeking operational efficiency, higher satisfaction, or enhanced digital presence? We'll guide you to the perfect tools. Leverage our insights to optimize your customer experience to drive digital success.",
    tabImg: TabImg1,
  },
  {
    id: 2,
    tabTitle: 'Pricing',
    tabContentTitle: 'Pricing Visibility',
    tabDescription:
      'Map your exact requirements, prioritize and pick solutions at the right budget.',
    tabHighlightContent:
      'We understand every business has unique needs and budgets. Through thorough assessment, we prioritize and streamline for efficiency',
    tabDescription2:
      'We understand every business has unique needs and budgets. Through thorough assessment, we prioritize and streamline for efficiency. Our goal: provide cost-effective solutions delivering tangible results, ensuring confident investment in your success.',
    tabImg: TabImg2,
  },
  {
    id: 3,
    tabTitle: 'Rigorous evaluation',
    tabContentTitle: 'Rigourous evaluation',
    tabDescription:
      'We offer the best pricing visibility in the market, ensuring that our competitive pricing strategies are transparent and accessible to our customers.',
    tabHighlightContent:
      'Our pricing model emphasizes transparency and accessibility, offering clear visibility for informed decisions.',
    tabDescription2:
      'Our pricing model emphasizes transparency and accessibility, offering clear visibility for informed decisions. We provide flexible structures tailored to businesses of all sizes and budgets, ensuring the best value and a dedicated partnership for your success.',
    tabImg: TabImg3,
  },
  // {
  //   id: 4,
  //   tabTitle: 'Experience',
  //   tabContentTitle: 'Experience.',
  //   tabDescription:
  //     'We exclusively offer the finest products sourced from around the world, ensuring the highest quality for our customers.',
  //   tabHighlightContent:
  //     'We meticulously choose premium SaaS solutions, ensuring top performance, security, and usability',
  //   tabDescription2:
  //     'From streamlining operations to boosting customer engagement, our offerings epitomize quality and effectiveness',
  //   tabImg: TabImg4,
  // },
  {
    id: 4,
    tabTitle: 'RFP & BRD Assistance',
    tabContentTitle: 'RFP & BRD Assistance',
    tabDescription: 'The prefered digital transformation partner ',
    tabHighlightContent:
      'Our commitment to excellence, innovative solutions, and expertise earn the confidence of industry leaders. ',
    tabDescription2:
      'Our commitment to excellence, innovative solutions, and expertise earn the confidence of industry leaders. Harnessing cutting-edge technology and strategic insights, we empower businesses to thrive in the digital landscape.',
    tabImg: TabImg4,
  },
];

const SassTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <PracticeTabContainer>
      <TabWrapper>
        <TabsContainer>
          {TabsData?.map((tab, idx) => {
            return (
              <Tabs tabSelect={selectedTab === idx}>
                <TabTitle onClick={() => setSelectedTab(tab?.id - 1)}>
                  {tab?.tabTitle}
                </TabTitle>
              </Tabs>
            );
          })}
        </TabsContainer>
      </TabWrapper>

      <TabContentWrapper>
        <TabContent>
          <TabLeft>
            <TabContentTitle>
              {TabsData[selectedTab]?.tabContentTitle}
            </TabContentTitle>
            <TabContentDescription>
              {TabsData[selectedTab]?.tabDescription}
            </TabContentDescription>

            {selectedTab === 0 && (
              <TabBreaker>
                <TabContentDescription>
                  Seeking operational efficiency, higher satisfaction, or
                  enhanced digital presence?
                </TabContentDescription>
                <TabContentDescription>
                  We'll guide you to the perfect tools. Leverage our insights to
                  optimise your customer experience to drive digital success.
                </TabContentDescription>
              </TabBreaker>
            )}

            {selectedTab !== 0 && (
              <TabBreaker>
                <TabContentDescription>
                  {TabsData[selectedTab]?.tabDescription2}
                </TabContentDescription>
              </TabBreaker>
            )}
          </TabLeft>

          <TabRight>
            <TabImage
              src={TabsData[selectedTab]?.tabImg}
              alt={TabsData[selectedTab]?.tabContentTitle}
            />
          </TabRight>
        </TabContent>
      </TabContentWrapper>
    </PracticeTabContainer>
  );
};
export default SassTab;
