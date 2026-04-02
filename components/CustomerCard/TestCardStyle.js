import styled from 'styled-components';

export const TestCardContainer = styled.div`
  height: 50%;
  min-width: 30%;
  background-color: rgba(255, 255, 255, 12%);
  border-radius: 2.4rem;
  display: flex;
  align-items: center;
  padding: 4rem;
  margin-right: 4rem;
`;

export const TestCustomerProfile = styled.div``;

export const TestProfileLogo = styled.div`
  img {
    height: '50px';
    width: '50px';
  }
`;

export const TestCustomerName = styled.h3`
  font-weight: 500;
  font-size: 2.4rem;
  color: ${(props) => props.theme.MineShaft};
  margin-top: 1.8rem;
`;

export const TestCustomerReview = styled.p`
  text-align: left;
  font-weight: 400;
  font-size: 2rem;
  line-height: 3.2rem;
  color: ${(props) => props.theme.MineShaft};
  opacity: 70%;
`;
