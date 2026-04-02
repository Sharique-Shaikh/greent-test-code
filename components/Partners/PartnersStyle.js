import styled from 'styled-components';
import Testimonial from '../../public/assets/images/testimonials.svg';

export const PartnerWrapper = styled.div`
  background-color: ${(props) => props.theme.Snuff};
  background-image: url('/assets/images/testimonials2.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 300px;
  width: 100%;
  border-radius: 2.4rem;
  padding: 8rem 0;
`;
