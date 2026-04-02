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
} from './PracticeTabStyle';
import TabImg1 from '../../public/assets/images/tailored-solution.svg';
import TabImg2 from '../../public/assets/images/product-pricing.svg';
import TabImg3 from '../../public/assets/images/pricing-visiblity.svg';
import TabImg4 from '../../public/assets/images/rigorous-evaluation.svg';
import { useState } from 'react';

// const TabsData = [
//   {
//     id: 1,
//     tabTitle: 'Software products - SaaS',
//     tabContentTitle: 'Software product Saas',
//     tabDescription:
//       'We empower businesses to make informed decisions about buying or building their technology solutions. With experience spanning over 50 brands, our expertise and insights will help you find the ideal SaaS product tailored to your unique requirements. Whether you need off-the-shelf software or a custom-built solution, we ensure you get the perfect fit for your business needs.',
//     tabImg: TabImg1,
//   },
//   {
//     id: 2,
//     tabTitle: 'Digital transformation',
//     tabContentTitle: 'Digital Transformation',
//     tabDescription:
//       'We specialize in executing custom development projects and providing comprehensive end-to-end solutions. Our services cover every stage of the process, from defining the technical architecture and conducting thorough discovery and scoping of work, to delivering the final product. Our holistic approach ensures that each project is tailored to meet your specific needs, resulting in a seamless and effective solution.',
//     tabImg: TabImg2,
//   },
//   {
//     id: 3,
//     tabTitle: 'PM & Solutioning',
//     tabContentTitle: 'PM & Solutioning',
//     tabDescription:
//       'Our extensive experience and strong expertise in project management and integration/implementation assignments set us apart. We excel at overseeing projects from inception to completion, ensuring seamless integration and effective implementation of solutions. With a proven track record of success, we are equipped to handle all your project management and implementation needs with precision and professionalism.',
//     tabImg: TabImg3,
//   },
//   {
//     id: 4,
//     tabTitle: 'Tech.Professional Services',
//     tabContentTitle: 'Tech. Professional Services',
//     tabDescription:
//       'we provide end-to-end implementation services, ensuring that your technology solutions are seamlessly integrated and effectively executed. With our expertise, we support your business in achieving its technology goals efficiently and successfully.',
//     tabImg: TabImg4,
//   },
//   // {
//   //   id: 5,
//   //   tabTitle: 'New',
//   //   tabContentTitle: 'Rigorous product evaluation.',
//   //   tabDescription:
//   //     'We exclusively offer the finest products sourced from around the world, ensuring the highest quality for our customers.',
//   //   tabImg: TabImg4,
//   // },
// ];

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

const PracticeTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <PracticeTabWrapper>
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
              <TabHighLightContent>
                {TabsData[selectedTab]?.tabContentTitle}
              </TabHighLightContent>
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
                    We'll guide you to the perfect tools. Leverage our insights
                    to optimise your customer experience to drive digital
                    success.
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
    </PracticeTabWrapper>
  );
};
export default PracticeTab;
