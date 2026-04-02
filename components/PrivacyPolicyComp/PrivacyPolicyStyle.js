import { device } from '@/styles/theme';
import styled from 'styled-components';

export const PolicyContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

export const PolicyWrapper = styled.div`
  padding: 15rem 0 9rem 0;
`;

export const StaticContent = styled.div`
  padding: 0 30px;

  text-align: justify;

  @media ${device.laptop} {
    padding: 0 60px;
  }
`;

export const StaticWrap = styled.div`
  padding-bottom: 3rem;
`;

export const PolicyTitle = styled.h1`
  color: #171c24;
  font-size: 3.9rem;
`;

export const PolicySubTitle = styled.h3`
  font-size: 2rem;
  color: #171c24;
  padding-bottom: 1.5rem;
  font-weight: 600;
`;

export const PolicyContent = styled.div`
  padding-bottom: 3rem;

  p {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #171c24;
    font-family: 'futura_ptbook';
    line-height: 2.8rem;
    word-wrap: break-word;
    word-break: break-word;
  }

  ul {
    padding-left: 1.5rem;
  }

  li {
    list-style: disc;
    padding-bottom: 1.5rem;
    color: #171c24;
    font-family: 'futura_ptbook';
    line-height: 1.5;
    font-size: 2rem;
  }

  b {
    font-weight: bold;
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    padding-bottom: 1.5rem;
  }

  a {
    letter-spacing: 0.5px;
    outline: none;
    color: #0d6efd;
    text-decoration: none;
    word-break: break-all;
  }
`;
