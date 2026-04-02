import Image from 'next/image';
import {
  Container,
  Line,
  Section,
  SectionDescription,
  SectionTitle,
} from '../common/CommonStyle';
import {
  BottomImageContainer,
  ImageColumn,
  ProjectContentColumn,
  ProjectContentTitle,
  ProjectManageWrap,
  ProjectSubContent,
  ProjectWrapper,
  TopImageContainer,
} from './SolutionProjectStyle';
import projectSideDesign from '@/public/assets/images/projectSideDesign.svg';
import projectDesignBottom from '@/public/assets/images/projectDesignBottom.svg';
import projectPartners from '@/public/assets/images/projectPartners.svg';
import SolutionProjectCarousel from '@/components/SolutionProjectCarousel';

export default function SolutionProject() {
  return (
    <Section>
      <Container>
        <SectionTitle>Project Management </SectionTitle>
        <SectionDescription>
          Our project management expertise at Greentern helps organizations
          navigate intricate projects, break through challenges, and reach their
          goals with precision and efficiency.
        </SectionDescription>
        <ProjectWrapper>
          <TopImageContainer>
            <Image src={projectSideDesign} alt='project' />
          </TopImageContainer>
          <ProjectManageWrap>
            <ProjectContentColumn>
              <ProjectContentTitle>
                Accelerating Achievement: Strategic Project Management
                Partnerships
                {/* <Line>consectetur.</Line> */}
              </ProjectContentTitle>
              <ProjectSubContent>
                Our project management solutions offer tailored assistance to
                streamline operations and propel success, whether it involves
                launching a product or navigating digital transformation. We
                kickstart projects by evaluating objectives, engaging with
                stakeholders, and outlining scopes, timelines, and strategies to
                mitigate risks.
              </ProjectSubContent>
            </ProjectContentColumn>
            <ImageColumn>
              <Image src={projectPartners} alt='project' />
            </ImageColumn>
          </ProjectManageWrap>
          <SolutionProjectCarousel />
          <BottomImageContainer>
            <Image src={projectDesignBottom} alt='project' />
          </BottomImageContainer>
        </ProjectWrapper>
      </Container>
    </Section>
  );
}
