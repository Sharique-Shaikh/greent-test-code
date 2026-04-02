import Hero from './Hero';
import AboutUs from './AboutUs';
import CaseStudy from './CaseStudy';
import CrmAdaption from './CrmAdaption';
import Features from './Feature';
import Loyalty from './Loyalty';
import LoyaltyProgram from './LoyaltyProgram';
import CustomerLifecycle from './CustomerLifecycle';
import BusinessStory from '../BusinessStory';
import Partners from '../Partners';
import WhyGt from './WhyGt';
import ProjectManagement from './ProjectManagement';
import CustomerManagement from './CustomerManagement';
import BusinessSolutions from './BusinessSolutions';

const CrmAndLoyaltyPage = () => {
  return (
    <>
      <Hero />
      <Loyalty />
      <LoyaltyProgram />
      {/* <WhyGt /> */}
      {/* <CustomerLifecycle /> */}
      {/* <Partners /> */}
      <ProjectManagement />
      <CustomerManagement />
      <BusinessSolutions />
      <BusinessStory />
    </>
  );
};

export default CrmAndLoyaltyPage;
