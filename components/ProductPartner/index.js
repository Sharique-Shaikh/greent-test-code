import React from 'react';
import {
  Container,
  Section,
  SectionDescription,
  SectionTitle,
} from '../common/CommonStyle'; // Ensure these are correct
import {
  BottomImageContainer,
  PartnerWithWrap,
  TopImageContainer,
  StyledTable,
  TableContOne,
  TableContTwo,
  ScrollableContainer,
} from './ProductPartnerStyle'; // Ensure these are correct
import partnerRight from '../../public/assets/images/partnerRight.svg';
import partnerLeft from '../../public/assets/images/partnerLeft.svg';
import greenternLogo from '../../public/assets/images/greenternLogo.svg';
import redCross from '../../public/assets/images/redCross.svg';
import greenTick from '../../public/assets/images/greenTick.svg';
import Image from 'next/image';

function ProductPartner() {
  return (
    <Section>
      <Container>
        <SectionTitle>Partner with us</SectionTitle>
        <SectionDescription>
          Serving a diverse clientele, from global brands to startups we drive
          lasting digital advancements in today's transformative landscape.
        </SectionDescription>
        <PartnerWithWrap>
          <TopImageContainer>
            <Image src={partnerRight} alt='' />
          </TopImageContainer>
          <ScrollableContainer>
            <StyledTable>
              <thead>
                <tr>
                  <th></th>
                  <th style={{ textAlign: 'center' }}>
                    <TableContOne>Traditional GTM</TableContOne>
                  </th>
                  <th>
                    <Image src={greenternLogo} alt='' layout='fixed' />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <TableContOne>
                      Delivering an early global market plan
                    </TableContOne>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <Image
                      src={redCross}
                      alt=''
                      width={30}
                      height={30}
                      layout='fixed'
                      style={{ verticalAlign: 'middle' }} // Center the image vertically
                    />
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        src={greenTick}
                        alt=''
                        width={30}
                        height={30}
                        layout='fixed'
                      />
                      <TableContTwo>
                        Enabling organization transition from knowledge to
                        Global Success
                      </TableContTwo>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TableContOne>
                      Compliance vs. Momentum: Sales Team enablement
                    </TableContOne>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <Image
                      src={redCross}
                      alt=''
                      width={30}
                      height={30}
                      layout='fixed'
                      style={{ verticalAlign: 'middle' }} // Center the image vertically
                    />
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        src={greenTick}
                        alt=''
                        width={30}
                        height={30}
                        layout='fixed'
                      />
                      <TableContTwo>
                        Average our local sales expertise to help you, Boost
                        your pipeline by at least $1 million
                      </TableContTwo>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TableContOne>
                      Account-Based Marketing (ABM) planning for international
                      markets
                    </TableContOne>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <Image
                      src={redCross}
                      alt=''
                      width={30}
                      height={30}
                      layout='fixed'
                      style={{ verticalAlign: 'middle' }} // Center the image vertically
                    />
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        src={greenTick}
                        alt=''
                        width={30}
                        height={30}
                        layout='fixed'
                      />
                      <TableContTwo>
                        GTM Readiness – Cultural Insights, Sales approach,
                        Objections management
                      </TableContTwo>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TableContOne>Sales Performance</TableContOne>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <Image
                      src={redCross}
                      alt=''
                      width={30}
                      height={30}
                      layout='fixed'
                      style={{ verticalAlign: 'middle' }} // Center the image vertically
                    />
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image
                        src={greenTick}
                        alt=''
                        width={30}
                        height={30}
                        layout='fixed'
                      />
                      <TableContTwo>
                        Actionable intelligence for informed sales planning
                        performance
                      </TableContTwo>
                    </div>
                  </td>
                </tr>
              </tbody>
            </StyledTable>
          </ScrollableContainer>
          <BottomImageContainer>
            <Image src={partnerLeft} alt='' />
          </BottomImageContainer>
        </PartnerWithWrap>
      </Container>
    </Section>
  );
}

export default ProductPartner;
