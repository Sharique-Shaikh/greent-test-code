import { Line } from '../common/CommonStyle';
import {
  EnterpriseBestTech,
  EnterpriseContainer,
  EnterpriseDiv,
  EnterpriseFirstDiv,
  EnterpriseFirstDivCont,
  EnterpriseFirstNumber,
  EnterpriseSecondDiv,
  EnterpriseSub,
  EnterpriseWrapper,
  NumberCont,
  NumberDiv,
  NumberSubDiv,
  VerticalLine,
} from './SolutionEnterpriseStyle';

export default function SolutionEnterprise() {
  return (
    <EnterpriseWrapper>
      <EnterpriseFirstDiv>
        <EnterpriseFirstDivCont>
          We bring the relevant best in class technology solutioning guiding you
          with the process, architecture, products and implementation. Helping
          modern businesses to stay ahead of the curve & grow with Technology
        </EnterpriseFirstDivCont>
      </EnterpriseFirstDiv>
      <VerticalLine />

      <EnterpriseContainer>
        <EnterpriseDiv>
          <>
            <EnterpriseSecondDiv>Industry Experts - </EnterpriseSecondDiv>
            <EnterpriseSub>
              100+ years of Tech consulting for leading brands of the world
            </EnterpriseSub>
          </>
        </EnterpriseDiv>

        <EnterpriseDiv>
          <>
            <EnterpriseSecondDiv>The chosen ones - </EnterpriseSecondDiv>
            <EnterpriseSub>
              200+ Best in class handpicked technology products and solutions to
              evaluate
            </EnterpriseSub>
          </>
        </EnterpriseDiv>
      </EnterpriseContainer>

      <VerticalLine />
      <EnterpriseContainer>
        <EnterpriseDiv>
          <>
            <EnterpriseSecondDiv>Framework that works - </EnterpriseSecondDiv>
            <EnterpriseSub>
              we bring the industry and use-case focus in solutions that is 3x
              more valuable & robust
            </EnterpriseSub>
          </>
        </EnterpriseDiv>

        <EnterpriseDiv>
          <>
            <EnterpriseSecondDiv>
              Simple, Fast & Easy to Integrate -
            </EnterpriseSecondDiv>
            <EnterpriseSub>
              50% faster and integration friendly solution for quicker
              deployment
            </EnterpriseSub>
          </>
        </EnterpriseDiv>
      </EnterpriseContainer>
    </EnterpriseWrapper>
  );
}
